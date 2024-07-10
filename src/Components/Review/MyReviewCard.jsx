import React from "react";

const MyReviewCard = ({ r, handleDeleteReview, handleReviewUpdate }) => {
  const { _id, serviceName, email, reviewer, review, time } = r;

  return (
    <div>
      <div className="card m-6 bg-base-100 w-96 shadow-xl">
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
          <div className=" flex justify-between">
            <button
              onClick={() => handleReviewUpdate(_id)}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #808080 0%, #3fada8 100%)",
              }}
              className="btn btn-sm text-white"
            >
              UPDATE
            </button>
            <button
              onClick={() => handleDeleteReview(_id)}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #cb356b 0%, #bd3f32 100%)",
              }}
              className="btn btn-sm text-white"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
