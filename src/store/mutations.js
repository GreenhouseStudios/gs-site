const mutations = {
    setPosts(state,payload){
        state.posts = payload;
    },
    setPeople(state,payload){
        state.people = payload;
    },
    setProjects(state,payload){
        state.projects = payload;
    },
    setLoadingState(state,payload){
        state.loading = payload;
    }
}

export default mutations;