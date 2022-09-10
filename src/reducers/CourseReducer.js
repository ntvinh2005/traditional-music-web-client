const CourseReducer = (state, action) => {
    const {type, payload} = action
    console.log(payload)

    switch(type) {
        case 'LOADED_SUCCESS':
            return {
                ...state,
                courses: payload, 
            }
        case 'ADD_COURSE':
            return {
                ...state, 
                courses: [...state.courses, payload]
            }
        default: return state
    }
    
}

export default CourseReducer