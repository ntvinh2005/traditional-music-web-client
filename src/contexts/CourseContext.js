import {createContext, useReducer} from 'react'
import CourseReducer from '../reducers/CourseReducer'
import {apiUrl} from './constants'
import axios from 'axios'

export const CourseContext = createContext()

const CourseContextProvider = ({children}) => {
    const [courseState, dispatch] = useReducer(CourseReducer, {courses: []})
    const getCourses = async() => {
        try {
            const response = await axios.get(apiUrl+'/course/public')
            console.log(response.data.courses)
            dispatch({type: 'LOADED_SUCCESS', payload: response.data.courses})
        } catch (error) {
           console.log(error)
        }
    }

    const getCourse = async (courseId) => {
        try {
            const response = await axios.get(apiUrl+'/course/'+courseId)
            console.log(response.data.courses)
            dispatch({type: 'LOADED_SUCCESS', payload: response.data.courses})
        } catch (error) {
           console.log(error)
        }
    }

    //get your own course
    const getPrivateCourses = async() => {
        try {
            const response = await axios.get(apiUrl+'/course')
            console.log(response.data.courses)
            dispatch({type: 'LOADED_SUCCESS', payload: response.data.courses})
        } catch (error) {
           console.log(error)
        }
    }

    //add course
    const addCourse = async newCourse => {
        try {
            const response = await axios.post(apiUrl+'/course', newCourse)
            console.log(response.data)
            if (response.data.success) {
                dispatch({type: 'ADD_COURSE', payload: response.data.course})
                return response.data
            }
        } catch (error) {
            console.log(error)
            return error.response.data ? error.response.data : { success: false, message: 'Server error' }
        }
    }

    //context data
    const courseContextData = {getCourses, getCourse, getPrivateCourses, addCourse, courseState}

    //return provider
    return (
        <CourseContext.Provider value={courseContextData}>
            {children}
        </CourseContext.Provider>
    )
}

export default CourseContextProvider