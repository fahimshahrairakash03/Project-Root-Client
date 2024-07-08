import React, { useEffect, useState } from "react";

const ServiceBanner = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="px-10 py-20">
      <p className="text-center text-lg pb-2 text-gray-500 ">
        WHAT DO WE OFFER
      </p>
      <h2 className="pb-20   font-bold text-5xl text-center">
        Outdtanding Immigration <br />
        Visa <span className="text-orange-400 ">Services</span>{" "}
      </h2>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <div key={service._id}>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description.slice(0, 50)}. . .</p>
                <div className="card-actions justify-end">
                  <button
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #11998e 0%, #38ef7d 100%)",
                    }}
                    className="btn text-white hover:bg-gradient-to-r from-green-100 to-blue-500 "
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBanner;
