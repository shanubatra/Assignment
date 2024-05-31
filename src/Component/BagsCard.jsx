import React from "react";
import { Bags } from "../Constant.jsx";

export default function BagsCard() {
  return (
    <div className="flex flex-row items-baseline justify-around overflow-auto gap-2 ml-2">
      {Bags.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.icon} alt={item.title} />
            <p className="font-display font-normal leading-4 text-center text-[13px] p-3">
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
