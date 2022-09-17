import React from 'react'
import { useContext, useEffect } from 'react'
import { CourseContext } from '../../contexts/CourseContext'

import Navbar from './Navbar'
import Courses from '../course/Courses'

const Home = () => {
  const { getCourses, courseState: {courses} } = useContext(CourseContext)
  useEffect(() => {getCourses()}, [])

  return (
    <div>
      <Navbar className="fixed top-0"/>
      <br/>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Các khóa học dành cho bạn</h2>
        <Courses courses = {courses}/>
      </div>
    </div>
  )
  
}

export default Home