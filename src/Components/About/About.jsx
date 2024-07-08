import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const About = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <img
              src="https://themeim.com/demo/eduplan/assets/img/sections/about/student-in-library.png"
              className="w-full "
            />
          </div>

          <div className="w-1/2">
            <h1 className="p-6 text-5xl font-bold">
              Moving beyond product innovation to gain a competitive advantage
            </h1>
            <p className="p-6 text-gray-500 text-justify">
              ROOTS was established in 2007 with just one university partner and
              the vision to change the nature of education consultancy services
              provided in Bangladesh. Today ROOTS is a highly respected brand
              name and an industry leader working with more than two hundred
              higher education providers which include some of the top names in
              the UK, USA, Canada, Australia, Japan, and Malaysia. Roots strive
              to be the best by providing a service to students that is free and
              unrivaled by any other agency in the country, a service that gives
              students the confidence in knowing that they have made the right
              decision by coming to roots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
