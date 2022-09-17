import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { CourseContext } from "../../contexts/CourseContext";

import Navbar from "../layout/Navbar";

import CreateCourse from "../course/CreateCourse";
import Courses from "../course/Courses";

const Studio = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  const {
    getPrivateCourses,
    courseState: { courses },
  } = useContext(CourseContext);
  useEffect(() => {
    getPrivateCourses();
  }, []);

  let body;
  if (authLoading) body = <h1>Loading</h1>;
  else if (isAuthenticated)
    body = (
      <>
        <Navbar />
        <br />
        <br />
        <CreateCourse></CreateCourse>
        <hr />
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Các khóa học do bạn tạo ra
          </h2>
          <Courses courses={courses} />
        </div>
      </>
    );
  else body = <Navigate to="/login"></Navigate>;

  return <>{body}</>;
};

export default Studio;
