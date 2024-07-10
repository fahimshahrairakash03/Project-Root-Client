import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import AddReviews from "../Review/AddReviews";
import ServiceReviews from "../Review/ServiceReviews";
import { AuthContext } from "../../context/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  console.log(service);

  return (
    <div>
      {/*Service Detials Section  */}

      <div className="hero bg-base-200 min-h-screen px-40">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={service.img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold ">{service.title}</h1>
            <p className="py-6 w-3/4 text-justify">{service.description}</p>
            <div className="flex mb-4 ">
              <button className="btn mr-5 w-64 border-neutral-400 ">
                <FaCheckCircle />
                ENTERING & LEAVING
              </button>
              <button className="btn w-64 border-neutral-400 ">
                <FaCheckCircle />
                COUNTRY CITIZENSHIP
              </button>
            </div>
            <div className="flex mb-4 ">
              <button className="btn mr-5 w-64 border-neutral-400 ">
                <FaCheckCircle />
                SETTLING IN COUNTRY
              </button>
              <button className="btn w-64 border-neutral-400 ">
                <FaCheckCircle />
                QUICK & EASY PROCESS
              </button>
            </div>
            <div className="flex ">
              <button className="btn mr-5 w-64 border-neutral-400 ">
                <FaCheckCircle />
                DOCUMENTS & PAYMENTS
              </button>
              <button className="btn w-64 border-neutral-400 ">
                <FaCheckCircle />
                RECEIVE YOUR VISA
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Review Section  */}

      {user ? (
        <AddReviews service={service}></AddReviews>
      ) : (
        <div className="text-center bg-base-200 ">
          <h1 className="text-4xl font-bold">
            PLEASE <Link>LOGIN</Link> TO ADD REVIEWS
          </h1>
          <p className="py-6"></p>
        </div>
      )}
      <ServiceReviews service={service}></ServiceReviews>
    </div>
  );
};

export default ServiceDetails;
