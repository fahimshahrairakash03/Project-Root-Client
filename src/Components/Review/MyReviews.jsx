import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {reviews.map((r) => (
        <MyReviewCard key={r._id} r={r}></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
