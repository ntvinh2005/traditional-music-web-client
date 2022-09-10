import React from 'react'
import { useContext, useEffect } from 'react'
import { CourseContext } from '../../contexts/CourseContext'

import Navbar from './Navbar'
import Courses from '../course/Courses'

const Home = () => {
  const { getCourses, courseState: {courses} } = useContext(CourseContext)
  useEffect(() => {getCourses()}, [])

  return (
    <div className="text-center h-screen">
      <Navbar/>
      <br/>
      <h3 className="text-lg font-medium leading-6 text-gray-900 ml-3">Các khóa học dành cho bạn</h3>
      <Courses courses = {courses}/>
    </div>
  )
  
}

export default Home