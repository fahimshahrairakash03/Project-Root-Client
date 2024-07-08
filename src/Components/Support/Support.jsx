import React from "react";
import SupportCard from "./SupportCard";

const Support = () => {
  const supports = [
    {
      id: "1",
      name: "One Stop Study Solution",
      details:
        "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text",
      img: "https://themeim.com/demo/eduplan/assets/img/icon/idea.png",
    },
    {
      id: "2",
      name: "One To One Discussion",
      details:
        "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text",
      img: "https://themeim.com/demo/eduplan/assets/img/icon/coversation.png",
    },
    {
      id: "3",
      name: "End To End Support",
      details:
        "Get a full view so you know where to save. Track spending, deta keep tab subscription lorem ipsum text",
      img: "https://themeim.com/demo/eduplan/assets/img/icon/emergency.png",
    },
  ];

  return (
    <div className="p-10">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {supports.map((support) => (
          <SupportCard key={support.id} support={support}></SupportCard>
        ))}
      </div>
    </div>
  );
};

export default Support;
