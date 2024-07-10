import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const ServiceReviews = ({ service }) => {
  const { _id, title, price } = service;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/reviews?serviceid=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  return (
    <div>
      {reviews ? (
        <div className="flex justify-center bg-base-200 p-10">
          {reviews.map((r) => (
            <ReviewCard key={r._id} r={r}></ReviewCard>
          ))}
        </div>
      ) : (
        <h1 className="text-5xl font-bold">No Reviews</h1>
      )}
    </div>
  );
};

export default ServiceReviews;
