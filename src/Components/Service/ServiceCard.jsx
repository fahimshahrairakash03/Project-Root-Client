import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description } = service;
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure
          style={{
            background:
              "linear-gradient(to top, var(--bg-theme-color1), transparent)",
          }}
        >
          <img
            style={{
              height: "300px",
            }}
            className="w-full bg-gradient-to-r from-blue-500 to-transparent"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 50)}. . .</p>
          <div className="card-actions justify-end">
            <button
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
              }}
              className="btn text-white  "
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
