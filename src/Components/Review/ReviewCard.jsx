import React from "react";

const ReviewCard = ({ r }) => {
  const { serviceName, email, reviewer, review, time } = r;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-gray-500 text-sm">{serviceName}</h2>
          <h2 className="card-title">{review}</h2>
          <div className="flex justify-between">
            <p className="text-gray-500 text-sm">Fahim Shahriar Akash</p>
            <p className="text-gray-500 text-sm">{email.slice(0, 10)}</p>
          </div>
          <hr />
          <div className="">
            <p className="text-gray-500 text-sm">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
