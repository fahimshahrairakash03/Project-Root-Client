import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const { user } = useContext(AuthContext);
  const review = useLoaderData();
  console.log(review);
  return (
    <div>
      <div className="hero bg-base-200 pb-6 ">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Update Review</h1>
            <p className="py-6"></p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Give Review</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered"
                  placeholder="Write Here"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
