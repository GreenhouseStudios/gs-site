<template>
  <div class="body">
    <div class="gs-intro w-80">
      <h2 class="title">
        Facilitating humanities research through collaboration, digital
        technology and design.
      </h2>
    </div>

    <div class="video-container">
      <!-- <img src="../public/img/Animation_Fill.png" /> -->
      <iframe
        width="100vw"
        src="https://drive.google.com/file/d/1xmwf5NpIzoi13lGrfhETzn7WFpFWVn1v/preview"
        title="GS Process Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="text-1">
      <div class="fprojects-text">
        <h3 class="title-2 f2" style="padding: 0px !important;"> Featured Projects </h3>
        <router-link to="/projects"> view all projects &#8594; </router-link>
      </div>
      <div class="grid sidescroll" v-if="projects">
        <div v-for="(project,index) in projects" :key="project.id" :index="index">
        <card v-if="index < 5" :project="project" ></card>
        </div>
      </div>
    </div>
    <body>
      <div class="tabs">
        <input type="radio" name="tabs" id="tabone" checked="checked" />
        <label for="tabone">Collaborative Culture</label>
        <div class="tab">
          <p>
            Greenhouse Studios implements a “collaboration first” approach that
            brings a wide variety of people together to create original works of
            research from start to finish.
          </p>
          <p>
            We are dedicated to addressing the persistent, intertwined problems
            of workflow and hierarchy with a mission that equally values all
            stakeholders involved in producing scholarship. Everyone has a seat
            at the table and a voice in the conversation.
          </p>
          <p>
            As a scholarly research lab, we have created a unique workspace—a
            scholarly communications design studio—which….
          </p>
        </div>

        <input type="radio" name="tabs" id="tabtwo" />
        <label for="tabtwo">What We Do</label>
        <div class="tab">
          <p>
            We lead an inquiry-driven, collaboration-first scholarly design
            process together with an interdisciplinary team. Based on collective
            interests, backgrounds, skills, and aspirations, we conceive and
            implement a multimodal response to a challenge posed by a prompt.
          </p>
          <p>
            Depending on audiences and aims, projects may take shape in diverse
            media outputs ranging from interactive websites and immersive
            virtual reality to exhibitions and documentary films.
          </p>
        </div>

        <input type="radio" name="tabs" id="tabthree" />
        <label for="tabthree">Who We Are</label>
        <div class="tab">
          <p>
            As an interdisciplinary research unit, the Greenhouse Studios team
            comprises a wide variety of scholars, designers, developers, library
            professionals, editors, and more. We are a joint effort of the
            University of Connecticut’s College of Liberal Arts and Sciences,
            Library, and School of Fine Arts; our team members come from both
            within and beyond the university.
          </p>
        </div>
      </div>
    </body>

    <div class="text-1">
      <div class="fprojects-text">
        <h3 class="title-2 f2" style="padding: 0px !important">
          Featured Blog Posts
        </h3>
        <router-link to="/blog"> view blog &#8594; </router-link>
      </div>
      <div class="grid sidescroll" v-if="!$store.getters.loading">
        <div
          v-for="(post, i) in posts"
          :key="post.slug"
          :index="i"
        >
        <blog-card 
          v-if="i < 6"
          :post="post"
          :title="post.title"
          :content="post.content"
          :date="post.date"
          :slug="post.slug">
        </blog-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import BlogCard from "./components/BlogCard.vue";
//import Blog from ".//Blog.vue";
export default {
  name: "Home",
  components: { BlogCard, Card },
  //components: { Blog },
  data() {
    return {
      projects: null,
      posts: null,
    };
  },
  updated() {
    this.projects = this.$store.getters.allProjects;
    this.posts = this.$store.getters.allPosts;
  },
  mounted() {
    this.projects = this.$store.getters.allProjects;
    this.posts = this.$store.getters.allPosts;
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");

/* Mobile Home */

.tabs {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 5px 5px 5px 5px lightgray;
  font-family: "Libre Franklin";
  font-weight: 100;
  margin: 75px;
}

.tabs label {
  font-family: "Libre Franklin";
  display: block;
  padding: 1rem 2rem;
  margin-right: 0.2rem;
  cursor: pointer;
  background: #8dc63f;
  font-weight: 400;
}

.tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 30px;
  background: #fff;
}

.tabs input[type="radio"] {
  display: none;
}

.tabs input[type="radio"]:checked + label {
  background: #fff;
  color: #8dc63f;
  font-weight: 600;
  font-size: 20px;
}

.tabs input[type="radio"]:checked + label + .tab {
  display: block;
}

@media (max-width: 45em) {
  .tabs .tab,
  .tabs label {
    order: initial;
  }

  .tabs label {
    width: 100%;
    margin-right: 0;
    margin-top: 0.2rem;
  }
}

body {
  font-family: "Libre Franklin";
  min-height: 100vh;
  padding-top: 100px;
  line-height: 1.5;
  margin: 0 auto;
  font-size: 17px;
  padding-left: 40px;
  padding-right: 40px;
  padding: 60px;
}

body {
  font-family: "Libre Franklin";
  min-height: 100vh;
  padding-top: 100px;
  line-height: 1.5;
  margin: 0 auto;
  font-size: 17px;
  padding-left: 40px;
  padding-right: 40px;
  padding: 60px;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  // padding-left: 50px;
  // padding-right: 50px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  padding: 20;
  top: 0;
  right: -20;
  left: 40;
  width: 100%;
  height: 100%;
}

.nav-img {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  z-index: -1;
}

.tabs {
  display: flex;
  flex-wrap: wrap;
  box-shadow: 5px 5px 5px 5px lightgray;
  font-family: "Libre Franklin";
  font-weight: 100;
}

.tabs label {
  font-family: "Libre Franklin";
  display: block;
  padding: 1rem 2rem;
  margin-right: 0.2rem;
  cursor: pointer;
  background: #8dc63f;
  font-weight: 400;
}

.tabs .tab {
  order: 99;
  flex-grow: 1;
  width: 100%;
  display: none;
  padding: 30px;
  background: #fff;
}

.tabs input[type="radio"] {
  display: none;
}

.tabs input[type="radio"]:checked + label {
  background: #fff;
  color: #8dc63f;
  font-weight: 600;
  font-size: 20px;
}

.tabs input[type="radio"]:checked + label + .tab {
  display: block;
}

@media (max-width: 45em) {
  .tabs .tab,
  .tabs label {
    order: initial;
  }

  .tabs label {
    width: 100%;
    margin-right: 0;
    margin-top: 0.2rem;
  }
}

body {
  font-family: "Libre Franklin";
  min-height: 100vh;
  padding-top: 100px;
  line-height: 1.5;
  margin: 0 auto;
  font-size: 17px;
  padding-left: 40px;
  padding-right: 40px;
  padding: 60px;
}

.gs-intro {
  height: 75vh;
  display: table;
  overflow: hidden;
}

.gs-intro h2 {
  font-family: "Libre Franklin";
  font-weight: 600;
  font-size: 50px;
  // padding-right: 30px;
  // padding-left: 30px;
  margin: 0;
  display: table-cell;
  vertical-align: middle;
  padding-top: 10px !important;
}

@media (max-width: 660px) {
  .gs-intro h2 {
    font-size: 35px;
  }
}

.animation_fill img {
  width: 100%;
  height: auto;
  padding-top: 100px;
}

.footer-img {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 750px;
  z-index: -1;
}

.footer-information {
  padding-top: 280px;
  text-align: center;
}

.copyright {
  padding-top: 15px;
}

.grants img {
  height: 40px;
  padding: 15px;
  padding-top: 30px;
}

.social-media img {
  height: 30px;
  padding: 8px;
  width: auto;
}

.social-media {
  display: flex;
  justify-content: center;
  align-self: center;
  padding-top: 10px;
}

.footer-pages {
  padding-top: 10px;
}

.footer-pages a {
  text-decoration: none;
  color: #161616;
}

.footer-people a:hover,
.footer-projects a:hover,
.footer-joinus a:hover {
  text-decoration: wavy underline;
}

.footer-people,
.footer-projects,
.footer-joinus {
  padding: 5px;
}

footer {
  bottom: 0;
  font-family: "Libre Franklin";
  font-weight: 300;
  font-size: 12px;
}

.card {
  height: 350px;
  width: 300px;
}

.flipCard {
  height: 350px;
  width: 300px;
  margin: 0px;
}

.img-front {
  border-radius: 10px;
  border: none;
}

.flipCard .card.flipped {
  transform: rotatey(-180deg);
}

.flipCard .card {
  height: 350px;
  width: 300px;
  transform-style: preserve-3d;
  transition: 1s;
  border: none;
}

.flipCard .card .side {
  height: 350px;
  width: 300px;
  cursor: pointer;
  position: absolute;
  border-radius: 5px;
  backface-visibility: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 10px;
}

.flipCard .card .back {
  transform: rotatey(-180deg);
}

.tile-back {
  z-index: -5;
  backface-visibility: hidden;
}

/* .flex-container {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          box-sizing: border-box;
        } */

.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
}

.people-img {
  height: 200px;
  width: 200px;
  display: block;
  margin-top: -90px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 5px solid white;
  background-color: white;
  border-radius: 100%;
  display: inline-block;
  margin-left: 15%;
}

.people-name {
  font-family: "Samo";
  text-align: center;
  line-height: 35px;
  font-size: 30px;
  margin: 0;
  padding: 0;
}

.people-title {
  font-size: 12px;
  text-align: center;
  margin: 10px;
  line-height: 20px;
  font-family: "Libre Franklin";
}

.people-desc {
  margin: 0;
  padding: 18px;
  margin-top: 14px;
  position: absolute;
  font-size: 12px;
  line-height: 21px;
  font-family: "Libre Franklin";
  text-align: center;
}

.linkedin {
  height: 10%;
  width: auto;
  position: absolute;
  margin-top: 110%;
  margin-right: 75%;
}

.title-new {
  width: 250px;
  height: 80px;
  object-fit: contain;
  padding-top: 35px;
}

.title-new-1 {
  width: 250px;
  height: 80px;
  object-fit: contain;
  padding-top: 35px;
}

.desc {
  margin: 0px;
  padding-left: 30px;
  padding-right: 30px;
  font-family: "Libre Franklin", Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-align: center;
}

#button {
  border-radius: 5px;
  letter-spacing: 2px;
  padding: 5px 10px 5px 10px;
  font-family: samo, Arial, Helvetica, sans-serif;
}

.btn-bol {
  color: white;
  background-color: #246481;
  border: 2px solid #246481;
}

.btn-bol:hover {
  background-color: white;
  color: #246481;
}

.btn-cvr {
  color: white;
  background-color: #9d8d32;
  border: 2px solid #9d8d32;
}

.btn-cvr:hover {
  background-color: white;
  color: #9d8d32;
  border: 2px solid #9d8d32;
}

.btn-c600 {
  color: white;
  background-color: #8cc947;
  border: 2px solid #8cc947;
}

.btn-c600:hover {
  background-color: white;
  color: #8cc947;
  border: 2px solid #8cc947;
}

.btn-eer {
  color: white;
  background-color: #b7c238;
  border: 2px solid #b7c238;
}

.btn-eer:hover {
  background-color: white;
  color: #b7c238;
  border: 2px solid #b7c238;
}

.btn-fino {
  color: white;
  background-color: #659370;
  border: 2px solid #659370;
}

.btn-fino:hover {
  background-color: white;
  color: #659370;
  border: 2px solid #659370;
}

.btn-flusser {
  color: white;
  background-color: #2b2d42;
  border: 2px solid #2b2d42;
}

.btn-flusser:hover {
  background-color: white;
  color: #2b2d42;
  border: 2px solid #2b2d42;
}

.btn-hartford {
  color: white;
  background-color: #509ec8;
  border: 2px solid #509ec8;
}

.btn-hartford:hover {
  background-color: white;
  color: #509ec8;
  border: 2px solid #509ec8;
}

.btn-husky {
  color: white;
  background-color: #36296b;
  border: 2px solid #36296b;
}

.btn-husky:hover {
  background-color: white;
  color: #36296b;
  border: 2px solid #36296b;
}

.btn-landgrab {
  color: white;
  background-color: #ae6046;
  border: 2px solid #ae6046;
}

.btn-landgrab:hover {
  background-color: white;
  color: #ae6046;
  border: 2px solid #ae6046;
}

.btn-leamh {
  color: white;
  background-color: #000000;
  border: 2px solid #000000;
}

.btn-leamh:hover {
  background-color: white;
  color: #000000;
  border: 2px solid #000000;
}

.btn-museums {
  color: white;
  background-color: #8cc947;
  border: 2px solid #8cc947;
}

.btn-museums:hover {
  background-color: white;
  color: #8cc947;
  border: 2px solid #8cc947;
}

.btn-overrated {
  color: white;
  background-color: #b7c238;
  border: 2px solid #b7c238;
}

.btn-overrated:hover {
  background-color: white;
  color: #b7c238;
  border: 2px solid #b7c238;
}

.btn-sourcery {
  color: white;
  background-color: #6a52a5;
  border: 2px solid #6a52a5;
}

.btn-sourcery:hover {
  background-color: white;
  color: #6a52a5;
  border: 2px solid #6a52a5;
}

@font-face {
  font-family: samo;
  src: url("./assets/SAMO-Regular.ttf");
}

.grid {
  display: grid;
  grid-gap: 3rem;
  grid-template-rows: repeat(4, 350px);
  grid-template-columns: repeat(3, 300px);
  justify-content: center;
  padding-top: 20px;
}

@media (max-width: 660px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(1, 300px);
  }
}

@media (min-width: 661px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 300px);
  }
}

@media (min-width: 1010px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 300px);
  }
}

.title {
  padding: 70px;
  font-size: 35px;
  line-height: 1.5em;
}

.title-1 {
  padding: 30px 30px 50px;
  font-weight: 600;
  font-size: 38px;
  margin: 0px;
  font-family: "Samo";
}

.title-2 {
  font-weight: 600;
  font-size: 24px;
}

.line {
  position: relative;
  bottom: 35px;
  width: 300px;
  padding-left: 30px;
}

p,
li,
span,
a {
  line-height: 1.5;
  font-size: 16px;
  max-width: 80ch;
}

p a {
  color: #161616;
}

.text-1,
.text-2 {
  padding: 30px;
}

.text-1 h2,
.text-2 h2 {
  padding-bottom: 20px;
}

.body {
  margin: 0 auto;
  max-width: fit-content;
}

.sidescroll {
  display: flex;
  justify-content: flex-start;
  width: 100vw;
  height: 450px;
  overflow: auto;
  // white-space: nowrap;
}

.fprojects-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>