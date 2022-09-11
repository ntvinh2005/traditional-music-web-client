import React, { useEffect, useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { CourseContext } from "../../contexts/CourseContext";
import { AuthContext } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Course = () => {
  const { courseId } = useParams();
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);
  const {
    getCourse,
    courseState: { courses },
  } = useContext(CourseContext);
  const {
    getPosts,
    postState: { posts },
  } = useContext(PostContext);
  useEffect(() => {
    getPosts(courseId);
  }, []);
  useEffect(() => {
    getCourse(courseId);
  }, []);

  let body;
  if (authLoading) body = <h1>Loading</h1>;
  else if (isAuthenticated)
    body = (
      <>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {courses[0] !== undefined && courses[0].title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Các bài học của khóa học được hiển thị dưới đây.
            </p>
          </div>
          {posts.map((post, index) => (
            <div className="border-t border-gray-200" key={post._id}>
              <dl className="mb-0">
                {index % 2 === 0 ? (
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 m-0">
                    <dt className="text-sm font-medium">
                      <Link to={"/post/" + post._id}>
                        Bài học số {index + 1}
                      </Link>
                    </dt>
                    <dd className="text-sm sm:col-span-2 sm:mt-0">
                      <Link to={"/post/" + post._id}>{post.title}</Link>
                    </dd>
                  </div>
                ) : (
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 m-0">
                    <dt className="text-sm font-medium">
                      <Link to={"/post/" + post._id}>
                        Bài học số {index + 1}
                      </Link>
                    </dt>
                    <dd className="text-sm sm:col-span-2 sm:mt-0">
                      <Link to={"/post/" + post._id}>{post.title}</Link>
                    </dd>
                  </div>
                )}
              </dl>
            </div>
          ))}
        </div>
        <div className="shadow place-self-center m-5 rounded-full">
          <Link
            to={"/course/createLessons/" + courseId}
            className="items-center justify-center rounded-full border border-transparent bg-yellow-600 px-8 py-3 text-base font-medium text-white hover:bg-yellow-700 md:py-4 md:px-10 md:text-lg hover:text-white"
          >
            Tạo bài học mới
          </Link>
        </div>
      </>
    );
  else body = <Navigate to="/login"></Navigate>;

  return (
    <>
      <Navbar />
      <br />
      <br />
      {body}
    </>
  );
};

export default Course;
