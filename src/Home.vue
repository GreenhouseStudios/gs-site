<template>
  <div class="body">
    <div class="gs-intro w-80">
      <h1 class="title">
        Facilitating humanities research through collaboration, digital technology and design.
      </h1>
    </div>

    <div class = "video-container">
      <!-- <img src="../public/img/Animation_Fill.png" /> -->
      <iframe width="100vw" src="https://drive.google.com/file/d/1xmwf5NpIzoi13lGrfhETzn7WFpFWVn1v/preview" title="GS Process Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div class="text-1">
        <h2 class="title-2">Collaborative Culture</h2>
        <p>Greenhouse Studios implements a “collaboration first” approach that brings a wide variety of people together to create original works of research from start to finish. </p>
        <p>We are dedicated to addressing the persistent, intertwined problems of workflow and hierarchy with a mission that equally values all stakeholders involved in producing scholarship. Everyone has a seat at the table and a voice in the conversation.</p>
        <p>As a scholarly research lab, we have created a unique workspace—a scholarly communications design studio—which….</p>
    </div>
    <div class="text-1">
      <h2 class="title-2">What We Do</h2>  
      <p>We lead an inquiry-driven, collaboration-first scholarly design process together with an interdisciplinary team. Based on collective interests, backgrounds, skills, and aspirations, we conceive and implement a multimodal response to a challenge posed by a prompt.</p>
      <p>Depending on audiences and aims, projects may take shape in diverse media outputs ranging from interactive websites and immersive virtual reality to exhibitions and documentary films.</p>
    </div>
    <div class="text-1">
      <h2 class="title-2">Who We Are</h2>  
      <p>As an interdisciplinary research unit, the Greenhouse Studios team comprises a wide variety of scholars, designers, developers, library professionals, editors, and more. We are a joint effort of the University of Connecticut’s College of Liberal Arts and Sciences, Library, and School of Fine Arts; our team members come from both within and beyond the university.</p>
  </div>

  <!-- <div class="text-1">
    <h2 class="title-2">Blog</h2> 
    <blog></blog>
  </div> -->


  </div>
</template>

<script>
// import Blog from ".//Blog.vue";
export default {
    name: "Home",
    // components: { Blog },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@100;200;300;400;500;600;700;800;900&display=swap");

/* Mobile Home */

body {
  margin: 0;
  padding: 0;
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

.video-container iframe, .video-container object, .video-container embed { 
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

.gs-intro {
  height: 75vh;
  display: table;
  overflow: hidden;
}

.gs-intro h1 {
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
  .gs-intro h1 {
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

.title{
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

p, li, span, a {
  line-height: 1.5;
  font-size: 16px;
  max-width: 80ch;
}

p a {
  color: #161616;
}

.text-1, .text-2 {
  padding: 30px;
}

.text-1 h2, .text-2 h2{
  padding-bottom: 20px;
}

.body {
  margin: 0 auto;
  max-width: fit-content;
}
</style>