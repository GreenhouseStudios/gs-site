const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },
  setPostCount(state, payload) {
    state.postCount = payload;
  },
  setPeopleCount(state, payload){
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
    state.posts.push(payload)
  },
  addPosts(state,payload){
    state.posts = state.posts.concat(payload);
  },
  addPeople(state,payload){
    state.people = state.people.concat(payload);
  },
  addPerson(state,payload){
    if(state.people.filter(p => p.slug === payload.slug) > 0) return;
    else state.people.push(payload);
  }
};

export default mutations;
