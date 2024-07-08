import React from "react";
import "./Services.css";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Service/ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <>
      <div className="service-text p-10">
        <p className="text-center text-lg pb-2 text-gray-300 ">
          WHAT DO WE OFFER
        </p>
        <h2 className="pb-20  text-white  font-bold text-5xl text-center">
          Outdtanding Immigration <br />
          Visa <span className="text-orange-400 ">Services</span>{" "}
        </h2>
      </div>
      <div className="p-10 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Services;
