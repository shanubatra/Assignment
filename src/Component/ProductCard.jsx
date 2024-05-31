import React from "react";
import { bookmark, cart } from "../images/images.jsx";

export default function ProductCard({data}) {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-black text-[#E5DFD9] w-[280.15px] min-h-[483.43px]  rounded  flex flex-col justify-between flex-nowrap"
          >
            <div className="relative">
              <img
                alt={item.id}
                src={item.image}
                className="w-full h-[328.43px] object-cover rounded-t-xl "
              />

              <img
                src={bookmark}
                alt="bookmark"
                className="absolute right-[20px] top-[15px]"
              />
            </div>
            <div className="bg-gray-800 rounded-b-xl px-4 py-3 h-[155px]">
              <h1 className="text-xl capitalize font-display font-normal">
                {item.title.slice(0, 40)}....
              </h1>
              <p className="text-lg capitalize font-display font-normal">
                {item.category}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-green-500">₹ {item.price}</p>
                <button>
                  <img src={cart} alt="cart" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
