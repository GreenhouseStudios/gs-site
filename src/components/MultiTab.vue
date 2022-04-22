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
        :style="picked === 0 ? `background: #F7F7F7; font-size: 20pt`: `background: #a4d171 ;`"
        ><span>Who We Are</span></label
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
        :style="picked === 1 ? `background: #F7F7F7;font-size: 20pt`: `background: #a4d171 ;`"
        ><span>What We Do</span></label
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
        :style="picked === 2 ? `background: #F7F7F7; font-size: 20pt`:`background: #a4d171 ;`"
        ><span>Collaborative Culture</span></label
      >

      <div v-if="picked === 2 && bpSmall  && !bpNotSmall" class="tab  pa3" style="">
        <p class="ma0">
          {{ content[picked] }}
        </p>
      </div>
    </div>
    <div class="tab dn db-ns pa4 z-3 f5 h-100" style="background: #F7F7F7">
      <p class="ma0">
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
    font-size: 18pt;
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
</style>