import axios from 'axios'

const actions = {
    async getSiteData({dispatch}){
        await dispatch('getPosts')
        await dispatch('getPeople')
        await dispatch('getProjects')
    },
    async getPosts({commit}){
        axios
        .get(
          "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/posts?per_page=100"
        )
        .then((res) => {
          commit("setPosts",res.data)
        });
    },
    async getPeople({commit}){
        axios
        .get(
          "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/person?per_page=100"
        )
        .then((res) => {
          commit("setPeople",res.data)
        });
    },
    async getProjects({commit}){
        axios
        .get(
          "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/pages?categories=85&per_page=100"
        )
        .then((res) => {
          commit("setProjects",res.data)
        });
    }
}

export default actions;