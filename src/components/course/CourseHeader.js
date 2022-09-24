import React from "react";
import { Link } from "react-router-dom";

const CourseHeader = ({ name, description, imgUrl }) => {
  var divStyle = {
    backgroundImage:
      "linear-gradient(rgb(0 0 0 / 30%), rgb(0 0 0 / 50%)), url(" +
      imgUrl +
      ")",
  };

  return (
    <div>
      <div
        className="flex flex-col items-center bg-cover bg-center justify-center min-h-screen "
        style={divStyle}
      >
        <div className="text-center">
          <h1 className=" text-yellow-200 mb-6 text-4xl font-bold uppercase md:text-5xl font-Poppins">
            {name}
          </h1>

          <h3 className="text-2xl text-yellow-200 font-Poppins">
            {description}
          </h3>
          <Link to="/home" className="cursor-pointer">
            <button className="mt-6 px-6 py-3  bg-yellow-100 text-yellow-700 font-semi-bold text-sm uppercase font-medium rounded-lg hover:bg-blue-100 focus:outline-none focus:bg-blue-100">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
