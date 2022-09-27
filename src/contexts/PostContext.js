import {createContext, useReducer} from 'react'
import PostReducer from '../reducers/PostReducer'
import {apiUrl} from './constants'
import axios from 'axios'

export const PostContext = createContext()

const PostContextProvider = ({children}) => {
    const [postState, dispatch] = useReducer(PostReducer, {posts: []})
    const getPosts = async(courseId) => {
        try {
            const response = await axios.get(apiUrl+'/post/'+courseId)
            dispatch({type: 'POST_LOADED_SUCCESS', payload: response.data.posts})
        } catch (error) {
           console.log(error)
        }
    }

    const getPost = async(postId) => {
        try {
            const response = await axios.get(apiUrl+'/post/get/'+postId)
            return(response.data.posts)
        } catch (error) {
           console.log(error)
        }
    }

    const createPost = async(courseId, newPost) => {
        try {
            const response = await axios.post(apiUrl+'/post/'+courseId, newPost)
            dispatch({type: 'ADD_POST', payload: response.data.posts})
        } catch (error) {
           console.log(error)
        }
    }

    //context data
    const postContextData = {getPosts, getPost, createPost, postState}

    //return provider
    return (
        <PostContext.Provider value={postContextData}>
            {children}
        </PostContext.Provider>
    )
}

export default PostContextProvider