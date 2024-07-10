import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import toast from "react-hot-toast";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleReviewUpdate = (id) => {
    console.log(id);
  };

  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Are you want to Delete the review?");
    if (proceed) {
      fetch(`http://localhost:3000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged > 0) {
            toast.success("Deleted Successfully");
            const remaining = reviews.filter((r) => r._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {reviews.map((r) => (
        <MyReviewCard
          key={r._id}
          r={r}
          handleDeleteReview={handleDeleteReview}
          handleReviewUpdate={handleReviewUpdate}
        ></MyReviewCard>
      ))}
    </div>
  );
};

export default MyReviews;
