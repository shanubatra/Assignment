import React from "react";
import { Bags } from "../Constant.jsx";

export default function BagsCard() {
  return (
    <div>
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
