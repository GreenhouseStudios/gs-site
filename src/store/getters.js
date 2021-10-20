const getters = {
    loading: state => {
        return state.loading;
    },
    postBySlug: state => slug => {
        return state.posts.find(p => p.slug === slug)
    },
    allPosts: state => {
        return state.posts;
    },
    allPeople: state =>{
        return state.people;
    },
    allProjects: state => {
        return state.projects;
    }
}

export default getters