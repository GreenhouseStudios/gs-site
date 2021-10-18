const mutations = {
    setPosts(state,payload){
        state.posts = payload;
    },
    setPeople(state,payload){
        state.people = payload;
    },
    setProjects(state,payload){
        state.projects = payload;
    }
}

export default mutations;