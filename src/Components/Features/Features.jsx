import React from "react";
import "./Feature.css";
import { TfiIdBadge } from "react-icons/tfi";
import { MdCurrencyExchange } from "react-icons/md";
import FeatureCard from "./FeatureCard";
const Features = () => {
  const features = [
    {
      name: "Direct Interviews",
      img: <TfiIdBadge />,
    },
    {
      name: "Cost Effective",
      img: <MdCurrencyExchange />,
    },
    {
      name: "Cost Effective",
      img: <MdCurrencyExchange />,
    },
    {
      name: "Cost Effective",
      img: <MdCurrencyExchange />,
    },
  ];

  return (
    <div className="feature-page px-10 py-20">
      <p className="text-center text-lg pb-5 text-gray-500 ">
        COUNTRIES YOU CAN VISIT
      </p>
      <h2 className="pb-20 font-bold text-5xl text-center">
        For Reasons to Choose <br /> Our{" "}
        <span className="text-orange-400">Compnay</span>{" "}
      </h2>
      <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Features;
