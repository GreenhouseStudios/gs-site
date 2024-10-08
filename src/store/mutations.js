const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },
  setPostCount(state, payload) {
    state.postCount = payload;
  },
  setPeopleCount(state, payload) {
    state.peopleCount = payload;
  },
  setPeople(state, payload) {
    state.people = payload;
  },
  setProjects(state, payload) {
    state.projects = payload;
  },
  setLoadingState(state, payload) {
    state.loading = payload;
  },
  addPost(state, payload) {
    state.posts.push(payload);
  },
  addPosts(state, payload) {
    state.posts = state.posts.concat(payload);
  },
  addPeople(state, payload) {
    state.people = state.people.concat(payload);
  },
  addPerson(state, payload) {
    if (state.people.filter((p) => p.slug === payload.slug) > 0) return;
    else state.people.push(payload);
  },
  setCategoryCount(state, payload) {
    state.categoryCount = payload;
  },
  setCategories(state, payload) {
    state.categories = payload;
  },
  setTags(state, payload) {
    state.tags = payload;
  },
  setPeopleCategories(state, payload) {
    state.peopleCategories = payload;
  },
  setPageCategories(state, payload) {
    state.pageCategories = payload;
  },
  setMenuItems(state, payload) {
    state.menuItems = payload;
  },
  setNavColor(state, payload) {
    state.navColor = payload;
    console.log(state.navColor);
  }
};

export default mutations;
