import React from "react";

const Courses = ({ courses }) => {

  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="card m-5 bg-yellow-100 hover:bg-yellow-200 border-2 border-transparent hover:border-yellow-800"
          >
            <a
              href={"http://localhost:3000/course/" + course._id}
              className="text-yellow-600 hover:text-yellow-700"
            >
              {course.title}
            </a>
            <blockquote className="text-yellow-600 hover:text-yellow-700">{course.description}</blockquote>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Courses;
