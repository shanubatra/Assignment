import React, { useEffect, useState } from "react";
import { Bags } from "../Constant.jsx";
import { bookmark, cart, ellipse, vector } from "../images/images.jsx";
import axios from "axios";
export default function Home() {
  let [data, setData] = useState([]);
  const getAPIData = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      if (response) setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className="bg-black text-[#E5DFD9] pb-5">
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
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <img src={ellipse} alt="ellipse" />
        </div>
        <div className="flex gap-3 items-center">
          <p>{data.length} Products</p>
          <img src={vector}  alt="vector"/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-baseline gap-8 mt-4 mb-32 ">
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
                    <img src={cart} alt="cart"/>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
