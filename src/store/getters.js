const getters = {
    postBySlug: state => slug => {
        return state.posts.find(p => p.slug === slug)
    }
}

export default getters