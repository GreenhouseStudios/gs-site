const getters = {
  loading: (state) => {
    return state.loading;
  },
  postBySlug: (state) => (slug) => {
    return state.posts.find((p) => p.slug === slug);
  },
  projectBySlug: (state) => (slug) => {
    console.log(state.projects)
    var result = state.projects.find((p) => p.slug === slug);
    if(!result) console.log("no project called " + slug)
    else return result;
  },
  allPosts: (state) => {
    return state.posts;
  },
  postCount: (state) => {
    return state.postCount;
  },
  unloadedPosts: (state) => {
    return state.postCount - state.posts.length
  },
  allPeople: (state) => {
    return state.people;
  },
  allProjects: (state) => {
    return state.projects;
  },
};

export default getters;
