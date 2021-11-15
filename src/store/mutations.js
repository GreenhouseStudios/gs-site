const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },
  setPostCount(state, payload) {
    state.postCount = payload;
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
    console.log("adding " + payload.slug)
    console.log("posts#: " + state.posts.length)
    state.posts.push(payload)
  },
  addPosts(state,payload){
    state.posts = state.posts.concat(payload)
  }
};

export default mutations;
