import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const ServiceBanner = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://project-root-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="px-10 py-20">
      <p className="text-center text-lg pb-2 text-gray-500 ">
        WHAT DO WE OFFER
      </p>
      <h2 className="pb-20   font-bold text-5xl text-center">
        Outdtanding Immigration <br />
        Visa <span className="text-orange-400 ">Services</span>{" "}
      </h2>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="flex justify-center p-10">
        <Link to="/services">
          <button className="btn  bg-gradient-to-r from-indigo-600 to-blue-500  text-white">
            View All Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceBanner;
