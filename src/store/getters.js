const getters = {
  loading: (state) => {
    return state.loading;
  },
  postBySlug: (state) => (slug) => {
    return state.posts.find((p) => p.slug === slug);
  },
  projectBySlug: (state) => (slug) => {
    console.log(state.projects);
    console.log("slug: " + slug);
    if (!state.projects.length) {
      console.log("no projects yet");
      return;
    }
    var result = state.projects.find((p) => p.slug === slug);
    if (!result) console.log("no project called " + slug);
    else return result;
  },
  personByName: (state) => (name) => {
    return state.people.find((p) => p.slug === name);
  },
  allPosts: (state) => {
    return state.posts;
  },
  postCount: (state) => {
    return state.postCount;
  },
  unloadedPosts: (state) => {
    return state.postCount - state.posts.length;
  },
  allPeople: (state) => {
    return state.people;
  },
  allProjects: (state) => {
    return state.projects;
  },
  categoryCount: (state) => {
    return state.categoryCount;
  },
  allCategories: (state) => {
    return state.categories;
  },
  allTags: (state) => {
    return state.tags;
  },
  allPeopleCategories: (state) => {
    return state.peopleCategories;
  },
  allPageCategories: (state) => {
    return state.pageCategories;
  },
  /*categoryByID: (state) => (id) => {
    return state.categories.find((c) => c.id === id);
  },*/
};

export default getters;
