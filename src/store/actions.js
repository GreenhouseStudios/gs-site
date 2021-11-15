import axios from "axios";

axios.defaults.baseURL =
  "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/";

const actions = {
  async getSiteData({ commit, dispatch }) {
    await dispatch("getPostCount");
    await dispatch("getPosts");
    await dispatch("getPeople");
    await dispatch("getProjects");
    commit("setLoadingState", false);
  },
  async getPostCount({ commit }) {
    return axios.get("posts?per_page=1").then((res) => {
      commit("setPostCount", parseInt(res.headers["x-wp-total"]));
    });
  },
  async getPosts({ commit }) {
    return axios.get("posts?per_page=12&page=1").then((res) => {
      var posts = [];
      res.data.forEach((post) => {
        if (post._links["wp:featuredmedia"]) {
          axios.get("media/" + post.featured_media).then((imgSrc) => {
            post["image"] = imgSrc.data.guid.rendered;
          });
        }
        posts.push(post);
      });
      commit("setPosts", posts);
    });
  },
  async getImage(something, id) {
    return axios.get("media/" + id).then((imgSrc) => {
      return imgSrc.data.guid.rendered;
    });
  },
  async getBlogImages({ commit }, posts) {
    var promises = [];
    posts.forEach((post) => {
      if (post.featured_media) {
        promises.push(
          axios.get("media/" + post.featured_media).then((imgSrc) => {
            post["image"] = imgSrc.data.guid.rendered;
          })
        );
      }
    });
    Promise.all(promises).then(() => {
      commit("addPosts", posts);
    });
  },
  async getMorePosts({ state, dispatch }, page) {
    let remainingPostCount = state.postCount - state.posts.length;
    console.log(`remaining posts: ${remainingPostCount}`);
    if (remainingPostCount > 0) {
      return axios
        .get(
          "posts?per_page=" +
            (remainingPostCount >= 12 ? 12 : remainingPostCount) +
            "&page=" +
            page
        )
        .then((res) => {
          dispatch("getBlogImages", res.data).then(() => {});
        });
    }
  },
  async getPeople({ commit }) {
    return axios.get("person?per_page=100").then((res) => {
      var people = [];
      res.data.forEach((person) => {
        if (
          person.categories.indexOf(86) < 0 &&
          person._links["wp:featuredmedia"]
        ) {
          axios.get("media/" + person.featured_media).then((imgSrc) => {
            person["image"] = imgSrc.data.guid.rendered;
          });
        }
        people.push(person);
      });
      commit("setPeople", people);
    });
  },
  async getProjects({ commit }) {
    return axios.get("pages?categories=85&per_page=100").then((res) => {
      commit("setProjects", res.data);
    });
  },
};

export default actions;
