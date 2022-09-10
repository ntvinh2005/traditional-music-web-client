const PostReducer = (state, action) => {
    const {type, payload} = action

    switch(type) {
        case 'POST_LOADED_SUCCESS':
            return {
                ...state,
                posts: payload, 
            }
        case 'ADD_POST':
            return {
                ...state, 
                posts: [...state.posts, payload]
            }
        default: return state
    }
    
}

export default PostReducer