import React from "react";

const Courses = ({ courses }) => {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {courses.map((course) => (
          <div key={course._id} className="group relative">
          <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-yellow-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
              src={course.imgUrl}
              alt=""
              className="h-full w-auto object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700">
                <a href={"/course/" + course._id}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {course.title}
                </a>
              </h3>
              <p className="mt-1 text-sm text-yellow-500">{course.description}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{String(course.createdAt.split("T")[0])}</p>
          </div>
        </div>
        ))}
      </div>
    </>
  );
};

export default Courses;
