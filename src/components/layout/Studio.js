import React from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useEffect } from 'react'
import {Navigate} from 'react-router-dom'
import { CourseContext } from '../../contexts/CourseContext'

import Navbar from '../layout/Navbar'

import CreateCourse from "../course/CreateCourse"
import Courses from "../course/Courses"

const Studio = () => {
  const {authState: {authLoading, isAuthenticated}} = useContext(AuthContext)
  const { getPrivateCourses, courseState: {courses} } = useContext(CourseContext)
  useEffect(() => {getPrivateCourses()}, [])

  let body 
  if (authLoading) body = (<h1>Loading</h1>)
  else if (isAuthenticated) body = (
  <>
    <Navbar/>
    <CreateCourse></CreateCourse>
    <hr/>
    <li className="text-lg font-medium leading-6 text-gray-900 ml-3">Các khóa học bạn đã tạo</li>
    <Courses courses = {courses} />
  </>
  )
  else body = (<Navigate to="/login"></Navigate>)

  return (
    <>{body}</>
  )
}

export default Studio