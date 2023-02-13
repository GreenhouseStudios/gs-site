import axios from "axios";

axios.defaults.baseURL =
  "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/";

const actions = {
  async getSiteData({ commit, dispatch }) {
    await dispatch("getPostCount");
    await dispatch("getPeopleCount");
    await dispatch("getCategoryCount");
    await dispatch("getPosts", 1);
    await dispatch("getPeople", 1);
    await dispatch("getProjects");
    await dispatch("getCategories");
    await dispatch("getTags");
    commit("setLoadingState", false);
  },
  async getPostCount({ commit }) {
    return axios.get("posts?per_page=1").then((res) => {
      commit("setPostCount", parseInt(res.headers["x-wp-total"]));
    });
  },
  async getPeopleCount({ commit }) {
    return axios.get("person?per_page=1").then((res) => {
      commit("setPeopleCount", parseInt(res.headers["x-wp-total"]));
    });
  },
  async getCategoryCount({ commit }) {
    return axios.get("categories?per_page=1").then((res) => {
      commit("setCategoryCount", parseInt(res.headers["x-wp-total"]));
    });
  },
  async getPosts({ commit, dispatch }, page) {
    return axios.get("posts?per_page=100&page=" + page).then((res) => {
      let pageTotal = parseInt(res.headers["x-wp-totalpages"]);
      var posts = [];
      res.data.forEach((post) => {
        // axios.get("media/" + post.featured_media).then((imgSrc) => {
        //   post["image"] = imgSrc.data.guid.rendered;

        // })
        posts.push(post);
        commit("setPosts", posts);
      });
      if (page < pageTotal) {
        dispatch("getPosts", page + 1);
      }
    });
  },
  async getImage(something, id) {
    return axios.get("media/" + id).then((imgSrc) => {
      return imgSrc.data.guid.rendered;
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
  async getPersonImage({ commit }, person) {
    if (
      person.categories.indexOf(86) < 0 &&
      person._links["wp:featuredmedia"]
    ) {
      axios.get("media/" + person.featured_media).then((imgSrc) => {
        let img = imgSrc.data.media_details.sizes;
        if (img) {
          if (img.full && img.full.height < 300)
            person["image"] = img.full.source_url;
          else if (img.medium) person["image"] = img.medium;
          else if (img.thumbnail.source_url) {
            person["image"] = img.thumbnail.source_url;
          } else
            person["image"] =
              "https://dev-greenhouse-studios.pantheonsite.io/wp-content/uploads/2017/01/g_icon-placeholder-1.jpg";
        } else console.log("no image for: " + person.slug);

        commit("addPerson", person);
      });
    } else commit("addPerson", person);
  },
  async getPeople({ dispatch }, page) {
    return axios.get("person?per_page=100&page=" + page).then((res) => {
      let pageTotal = parseInt(res.headers["x-wp-totalpages"]);
      res.data.forEach((person) => {
        dispatch("getPersonImage", person);
      });
      if (page < pageTotal) {
        dispatch("getPeople", page + 1);
      }
    });
  },
  // async getAlumni({commit}){
  //   return axios.get("person?per_page=100&categories[]=86&_fields[]=slug").then((res) =>{

  //   })
  // },
  async getProjects({ commit }) {
    return axios.get("pages?categories=85&per_page=100").then((res) => {
      commit("setProjects", res.data);
    });
  },
  async getCategories({ commit }) {
    return axios.get("categories?per_page=100&page=1").then((res) => {
      commit("setCategories", res.data);
    });
  },
  async getTags({ commit }) {
    return axios.get("tags?per_page=100&page=1").then((res) => {
      commit("setTags", res.data);
    });
  },
};

export default actions;
