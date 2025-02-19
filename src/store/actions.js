import axios from "axios";

axios.defaults.baseURL =
  "https://dev-greenhouse-studios.pantheonsite.io/wp-json/wp/v2/";

const actions = {
  async getSiteData({ commit, dispatch }) {
    await dispatch("getPostCount");
    await dispatch("getPeopleCount");
    await dispatch("getCategoryCount");
    await dispatch("getMenuItems");
    await dispatch("getPosts", 1);
    await dispatch("getPeople", 1);
    await dispatch("getProjects");
    await dispatch("getCategories");
    await dispatch("getTags");
    await dispatch("getPeopleCategories");
    await dispatch("getPageCategories");
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
  async getMenuItems({ commit }) {
    return axios.get("https://dev-greenhouse-studios.pantheonsite.io/wp-json/menus/v1/menus/gs-nav").then((res) => {
      commit("setMenuItems", res.data.items);
    });
  },
  async getPosts({ commit, dispatch }, page) {
    return axios.get("posts?_embed&per_page=100&page=" + page).then((res) => {
      let pageTotal = parseInt(res.headers["x-wp-totalpages"]);
      var posts = [];
      res.data.forEach((post) => {
        if (post.featured_media > 0) {
          axios.get("media/" + post.featured_media).then((imgSrc) => {
            post["image"] = imgSrc.data.media_details.sizes.medium?.source_url;
          });
        }

        posts.push(post);
      });

      commit("setPosts", posts);
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
  async getMorePosts({ state }, page) {
    let remainingPostCount = state.postCount - state.posts.length;
    console.log(`remaining posts: ${remainingPostCount}`);
    if (remainingPostCount > 0) {
      return axios.get(
        "posts?per_page=" +
          (remainingPostCount >= 12 ? 12 : remainingPostCount) +
          "&page=" +
          page
      );
    }
  },
  async getPersonImage({ commit }, person) {
    if (
      person.categories.indexOf(86) < 0 &&
      person._links["wp:featuredmedia"]
    ) {
      return axios.get("media/" + person.featured_media).then((imgSrc) => {
        let img = imgSrc.data.media_details.sizes;
        if (img) {
          if (img.full && img.full.height < 300)
            person["image"] = img.full.source_url;
          else if (img.medium) person["image"] = img.medium.source_url;
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
  async getPeople({ dispatch, state }, page) {
    if (state.people.length < state.peopleCount) {
      return axios.get("person?per_page=100&page=" + page).then((res) => {
        let pageTotal = parseInt(res.headers["x-wp-totalpages"]);
        res.data.forEach((person) => {
          dispatch("getPersonImage", person);
        });
        if (page < pageTotal) {
          dispatch("getPeople", page + 1);
        }
      });
    }
  },
  // async getAlumni({commit}){
  //   return axios.get("person?per_page=100&categories[]=86&_fields[]=slug").then((res) =>{

  //   })
  // },
  async getProjects({ commit, state }) {
    if (state.projects.length <= 0) {
      return axios.get("pages?categories=85&per_page=100").then((res) => {
        commit("setProjects", res.data);
      });
    }
  },
  async getCategories({ commit }) {
    // return axios.get("post_category").then((res) => {
    return axios.get("categories?per_page=100&page=1").then((res) => {
      let result = res.data;
      let uncategorizedIndex = result.indexOf(
        result.find((x) => x.slug === "uncategorized")
      );
      result.splice(uncategorizedIndex, 1);
      commit("setCategories", result);
    });
  },
  async getPeopleCategories({ commit }) {
    return axios.get("people_category").then((res) => {
      commit("setPeopleCategories", res.data);
    });
  },
  async getPageCategories({ commit }) {
    return axios.get("page_category").then((res) => {
      commit("setPageCategories", res.data);
    });
  },
  async getTags({ commit }) {
    return axios.get("tags?per_page=100&page=1").then((res) => {
      commit("setTags", res.data);
    });
  },
  setNavColor({ commit }, color) {
    commit("setNavColor", color);
  }
};

export default actions;
