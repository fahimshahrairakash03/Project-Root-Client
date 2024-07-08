import React from "react";

const FeatureCard = ({ feature }) => {
  const { name, img } = feature;
  return (
    <div>
      <div>
        <div className="card bg-base-200 hover:bg-gradient-to-r from-sky-700 from-indigo-200 via-purple-500 to-pink-300 hover:text-white shadow-sm border w-25  ">
          <div className="p-10 flex justify-between items-center">
            <h2 className="card-title">{name}</h2>
            <div className="">{img}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
