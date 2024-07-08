import React from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceId = form.id.value;
    const serviceName = form.name.value;
    const servicePrice = form.price.value;
    const serviceImg = form.img.value;
    const serviceDetails = form.details.value;

    const service = {
      service_id: serviceId,
      title: serviceName,
      img: serviceImg,
      price: servicePrice,
      description: serviceDetails,
    };
    console.log(service);

    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("service added successfully");
          toast.success("Successfully Added");
          form.reset();
        }
      });
  };

  return (
    <div className="p-5">
      <h1 className="text-center text-4xl text-black font-bold">ADD SERVICE</h1>

      <div className="mt-8 flex justify-center items-center">
        <form onSubmit={handleAddService} className="">
          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text">Service Id?</span>
            </div>
            <input
              type="text"
              name="id"
              placeholder="Service ID"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text">Service Name?</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Service Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w">
            <div className="label">
              <span className="label-text">Service Price?</span>
            </div>
            <input
              type="text"
              name="price"
              placeholder="Service Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Image URL</span>
            </div>
            <input
              type="text"
              name="img"
              placeholder="Image Url"
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <textarea
              name="details"
              className="textarea textarea-bordered"
              placeholder="Details"
            ></textarea>
          </label>
          <button
            style={{
              backgroundImage:
                "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
            }}
            className="btn text-white mt-8 w-full "
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
