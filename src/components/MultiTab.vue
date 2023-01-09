<template>
  <div class="about w-30-ns overflow-hidden center-m ma4-ns br2">
    <div class="tabs flex flex-row-ns flex-column">
      <input
        type="radio"
        name="tabs"
        id="tabone"
        checked="checked"
        :value="0"
        v-model="picked"
      />
      <label
        class="flex items-center justify-center pa3-ns pa2 br2 br--bottom"
        for="tabone"
        :style="picked === 0 ? `background: #F7F7F7;`: `background: #D7DAD7 ;`"
        ><span class="shimmer">Who We Are</span></label
      >
      <div v-if="picked === 0 && bpSmall && !bpNotSmall" class="tab pa3" style="">
        <p class="ma0">
          {{ content[picked] }}
        </p>
      </div>

      <input type="radio" name="tabs" id="tabtwo" :value="1" v-model="picked" />
      <label
        class="flex items-center justify-center pa3-ns pa2 br2 br--bottom"
        for="tabtwo"
        id="tab-two-label"
        :style="picked === 1 ? `background: #F7F7F7;`: `background: #D7DAD7 ;`"
        ><span class="shimmer">What We Do</span></label
      >
      <div v-if="picked === 1 && bpSmall  && !bpNotSmall" class="tab  pa3" style="">
        <p class="ma0">
          {{ content[picked] }}
        </p>
      </div>

      <input
        type="radio"
        name="tabs"
        id="tabthree"
        :value="2"
        v-model="picked"
      />
      <label
        class="flex items-center justify-center pa3-ns pa2 br2 br--bottom"
        for="tabthree"
        :style="picked === 2 ? `background: #F7F7F7;`:`background: #D7DAD7 ;`"
        ><span class="shimmer">Collaborative Culture</span></label
      >

      <div v-if="picked === 2 && bpSmall  && !bpNotSmall" class="tab  pa3" style="">
        <p class="ma0">
          {{ content[picked] }}
        </p>
      </div>
    </div>
    <div class="tab dn db-ns z-3 f5" style="background: #F7F7F7; height: 250px; display: table; padding: 32px 50px;">
      <p class="ma0 centertext">
        {{ content[picked] }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: 0,
      content: [
        ` As an interdisciplinary research unit, the Greenhouse Studios team
            comprises a wide variety of scholars, designers, developers, library
            professionals, editors, and more. We are a joint effort of the
            University of Connecticut’s College of Liberal Arts and Sciences,
            Library, and School of Fine Arts; our team members come from both
            within and beyond the university.`,
        `   Our aim is to challenge the ways in which scholarship is created and shared. 
            Our “hypothesis” is an inquiry-driven, collaboration-first scholarly design process, 
            through which we guide interdisciplinary teams to create original works of scholarship 
            as our means of experimentation. Based on collective interests, backgrounds, skills, 
            and aspirations, we conceive and implement a multimodal response to a challenge posed 
            by a prompt. Depending on audiences and aims, projects may take shape in diverse media 
            outputs ranging from interactive websites and immersive virtual reality to exhibitions 
            and documentary films.`,
            `As a scholarly research lab, we have created a unique workspace—a
            scholarly communications design studio—which establishes a
            “collaboration first” approach that brings a diverse team of people
            together to create original works of research.We are dedicated to
            addressing the persistent, intertwined problems of workflow and
            hierarchy with a mission that equally values all stakeholders
            involved in producing scholarship. Everyone has a seat at the table
            and a voice in the conversation.`,
      ],
    };
  },
  computed: {
      bpSmall() {
          return window.matchMedia('(max-width: 30em)').matches
      },
      bpNotSmall() {
          return window.matchMedia('(min-width: 30em)').matches
      }
  },
};
</script>

<style lang="scss" scoped>
/* Collaborative Culture / What We Do / Who We Are Tabs */
.about {
  width: 60%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: #F7F7F7;
  
}

.tabs {
  font-family: "Libre Franklin";
  font-weight: 200;
  border-radius: 5px;

  justify-content: space-around;
}

.about p {
  // font-size: 22px;
  cursor: pointer;
}

.tabs label {
  font-family: "Libre Franklin";
  text-align: center;
  height: 50px;
  cursor: pointer;
  font-weight: 400;
  flex: 1;
  font-size: 14pt;
}

.tabs .tab {
  flex-grow: 1;
  padding-left: 30px;
  padding-right: 30px;
}

.tabs input[type="radio"]:not(:checked) + label{
   &:hover{
    transition: 0.4s;
    font-size: 14pt;
    background: #8cc947 !important;
  }
}

.tabs input[type="radio"] {
  display: none;
}

.tabs input[type="radio"]:checked + label {
  color: black;
  font-weight: 600;
}

.tabs input[type="radio"]:checked + label + .tab {
  display: block;
}

@media (min-width: 720px) {
  .tabs {
    // height: 500px;
  }
   #tab-two-label{
    margin: 0 4px;
  }
}

@media (max-width: 800px){
  .about{
    width: 80%;
    margin: auto;
  }
  #tab-two-label{
    margin: 0;
  }
}

.centertext{
  display: table-cell;
  vertical-align: middle;
}

.shimmer:hover {
  display: inline-block;
  color: white;

  background: #000 -webkit-gradient(linear, 100% 0, 0 0, from(#444), color-stop(0.5, #aaa), to(#444));

  background-position: -4rem top; /*50px*/
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation-name: shimmer;
  -webkit-animation-duration: 2.2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-background-size: 4rem 100%; /*50px*/
}
@-webkit-keyframes shimmer {
  0% {
    background-position: -4rem top; /*50px*/
  }

  70% {
    background-position: 12.5rem top; /*200px*/
  }

  100% {
    background-position: 12.5rem top; /*200px*/
  }
}
</style>