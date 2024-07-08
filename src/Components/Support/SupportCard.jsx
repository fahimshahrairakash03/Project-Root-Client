import React from "react";

const SupportCard = ({ support }) => {
  const { name, details, img } = support;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="p-5" src={img} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
              }}
              className="btn btn-primary text-white border-none"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportCard;
