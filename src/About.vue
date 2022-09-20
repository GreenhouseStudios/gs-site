<template>
    <div>
        <h1 class="about"> ABOUT ME</h1>
        <div class="space">
        </div>
        <div class="nest">
            <div class="image">
                <img 
          class="people-img"
          :style="` filter: hue-rotate(${
            Math.random() * 0
          }deg); background-image:url( ${
            person.image
          } ); background-repeat: no-repeat; background-size:  ${
            person.image.includes('placeholder')
              ? '80%;  background-position: center'
              : '101%; background-position:center'
          }`">
                 <!-- <img v-else
          class="people-img"
          :style="` filter: hue-rotate(${
            Math.random() * 0
          }deg); background-image:url(https://via.placeholder.com/150); background-repeat: no-repeat; background-size: `"> -->
            </div>
            <h1 class="name"><strong>{{person.custom_fields.first_name[0] + " " + person.custom_fields.last_name[0]}}</strong> </h1>
            <br>
            <div v-html="person.custom_fields.about[0]" class="bio">   
            </div>
        </div>
        <br>
        <br>
        <div class="social-media">
          <div v-if="person.custom_fields.email && person.custom_fields.email[0]" 
          class="email">
            <a :href="'mailto:' + person.custom_fields.email[0]"
              ><img class="shadow" src="../public/img/email.svg" alt="email"
            /></a>
          </div>
          <div
            v-if="person.custom_fields.site && person.custom_fields.site[0]"
            class="site"
          >
            <a :href="person.custom_fields.site[0]"
              ><img class="shadow" src="../public/img/site.png" alt="website"
            /></a>
          </div>
          <div
            v-if="
              person.custom_fields.instagram &&
              person.custom_fields.instagram[0]
            "
            class="instagram"
          >
            <a :href="person.custom_fields.instagram[0]"
              ><img class="shadow" src="../public/img/instagram.svg" alt="instagram"
            /></a>
          </div>
          <div
            v-if="
              person.custom_fields.linkedin && person.custom_fields.linkedin[0]
            "
            class="facebook"
          >
            <a :href="person.custom_fields.linkedin[0]"
              ><img class="shadow" src="../public/img/linkedin.png" alt="linkedin"
            /></a>
          </div>
          <div
            v-if="
              person.custom_fields.twitter && person.custom_fields.twitter[0]
            "
            class="twitter"
          >
            <a :href="person.custom_fields.twitter[0]"
              ><img class="shadow" src="../public/img/twitter.svg" alt="twitter"
            /></a>
          </div>
        </div>
    </div>
</template>

<script>
export default {
data() {
    return {

    }
},
mounted () {
},
computed: {
  name() {
    return this.$route.params.name 
  },
  person(){
    return this.$store.state.people.find(x => x.slug === this.name)
  }
},
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 900px) {
    .nest {
        margin: 0 20%;
        top: 200px;
        z-index: 1;
    }
}

@media screen and (min-width: 900px) {
    .nest {
        margin: 0 30%;
        top: -100px;
        z-index: 1;
    }
}

.about {
    font-family: 'Samo';
    font-size: 50px;
    font-weight: 100;
    padding-left: 100px;
    padding-bottom: 50px;
}

br {
    margin-top: -200px;
}

.name {
  text-align: center;
}

.bio {
    font-family: 'Helvetica Neue', sans-serif;
    font-weight: 400;
}

.image {
    display: flex;
    justify-content: center;
}

.greenbg {
    max-width: 105%;
    max-height: 100%;
    min-width: 0%;
    margin-top: -20px;
}

/* p {
    display:flex;
    text-justify: inter-word;
    margin: 0px 300px 0px 300px;
    min-width: 50%;
} */

.icongrid {
    display: flex;
    gap: 20px;
}

img {
  margin: 20px;
}

.circle {
    background: rgb(0, 0, 0);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.grid3 {
    font-family: 'Libre Franklin';
    text-align: center;
}

.grid1 {
    font-family: 'Libre Franklin';
    text-align: center;
}

.bottom {
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: center;
    margin-left: -200px;
    margin-right: -200px;
}

.circle:hover {
    background: white;
    box-shadow: rgba(100, 100, 100, 0.5) 0px 7px 20px 0px;
}
</style>
