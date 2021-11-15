const getters = {
  loading: (state) => {
    return state.loading;
  },
  postBySlug: (state) => (slug) => {
    return state.posts.find((p) => p.slug === slug);
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
