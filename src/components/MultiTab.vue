<template>
  <div class="about bg-white w-50-ns overflow-hidden center-m ma4-ns">
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
        class="flex items-center justify-center pa3-ns pa2"
        for="tabone"
        :style="`background-image:url(${require('../../public/img/GH-Watercolor.png')}); background-size: 190% 900%; background-repeat: no-repeat`"
        ><span>Collaborative Culture</span></label
      >
      <div v-if="picked === 0 && bpSmall && !bpNotSmall" class="tab pa3" style="">
        <p class="ma0">
          {{ content[picked] }}
        </p>
      </div>

      <input type="radio" name="tabs" id="tabtwo" :value="1" v-model="picked" />
      <label
        class="flex items-center justify-center pa3-ns pa2"
        for="tabtwo"
        :style="`background-image:url(${require('../../public/img/GH-Watercolor.png')}); background-size: 300% 400%; background-repeat: no-repeat`"
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
        class="flex items-center justify-center pa3-ns pa2"
        for="tabthree"
        :style="`background-image:url(${require('../../public/img/GH-Watercolor.png')}); background-size: 500% 800%; background-repeat: no-repeat`"
        ><span>Who We Are</span></label
      >

      <div v-if="picked === 2 && bpSmall  && !bpNotSmall" class="tab  pa3" style="">
        <p class="ma0">
          {{ content[picked] }}
        </p>
      </div>
    </div>
    <div class="tab dn db-ns pa3 bg-white z-3" style="">
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
        `As a scholarly research lab, we have created a unique workspace—a
            scholarly communications design studio—which establishes a
            “collaboration first” approach that brings a diverse team of people
            together to create original works of research.We are dedicated to
            addressing the persistent, intertwined problems of workflow and
            hierarchy with a mission that equally values all stakeholders
            involved in producing scholarship. Everyone has a seat at the table
            and a voice in the conversation.`,
        ` As an interdisciplinary research unit, the Greenhouse Studios team
            comprises a wide variety of scholars, designers, developers, library
            professionals, editors, and more. We are a joint effort of the
            University of Connecticut’s College of Liberal Arts and Sciences,
            Library, and School of Fine Arts; our team members come from both
            within and beyond the university.`,
        `   We lead an inquiry-driven, collaboration-first scholarly design
            process together with an interdisciplinary team. Based on collective
            interests, backgrounds, skills, and aspirations, we conceive and
            implement a multimodal response to a challenge posed by a prompt.
            Depending on audiences and aims, projects may take shape in diverse
            media outputs ranging from interactive websites and immersive
            virtual reality to exhibitions and documentary films.`,
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
  width: 80%;
  box-shadow: 5px 5px 5px 5px lightgray;
}
.tabs {
  font-family: "Libre Franklin";
  font-weight: 200;
  border-radius: 5px;
  background: white;
  gap: 8px;
  justify-content: space-around;
}

.about p {
  font-size: 22px;
  cursor: pointer;
}

.tabs label {
  font-family: "Libre Franklin";
  text-align: center;
  height: 50px;
  font-size: 28px;
  cursor: pointer;
  background: #8cc947;
  font-weight: 400;
  flex: 1;
}

.tabs .tab {
  flex-grow: 1;
  padding-left: 30px;
  padding-right: 30px;
  background: #fff;
}

.tabs input[type="radio"] {
  display: none;
}

.tabs input[type="radio"]:checked + label {
  background: #fff;
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
}
</style>