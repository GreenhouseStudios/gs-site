import axios from 'axios'

const actions = {
    async getSiteData({commit,dispatch}){
        await dispatch('getPosts')
        await dispatch('getPeople')
        await dispatch('getProjects')
        commit('setLoadingState', false)
    },
    async getPosts({commit}){
        return axios
        .get(
          "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/posts?per_page=100"
        )
        .then((res) => {
          commit("setPosts",res.data)
        });
    },
    async getPeople({commit}){
        return axios
        .get(
          "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/person?per_page=100"
        )
        .then((res) => {
          var people = []
          res.data.forEach((person) => {
            if (person._links['wp:featuredmedia']) {
              axios
                .get("https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/media/" + person.featured_media)
                .then((imgSrc) => {
                  person["image"] = imgSrc.data.guid.rendered;
                  people.push(person);
                });
            }
          });
          commit("setPeople",people)
        });
    },
    async getProjects({commit}){
        return axios
        .get(
          "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/pages?categories=85&per_page=100"
        )
        .then((res) => {
          commit("setProjects",res.data)
        });
    }
}

export default actions;