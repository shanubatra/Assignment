import React, { useEffect, useState } from "react";
import { ellipse, vector } from "../images/images.jsx";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import BagsCard from "./BagsCard.jsx";
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
        <BagsCard />
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <img src={ellipse} alt="ellipse" />
        </div>
        <div className="flex gap-3 items-center">
          <p>{data.length} Products</p>
          <img src={vector} alt="vector" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-baseline gap-8 mt-4 mb-32 ">
        <ProductCard data={data} />
      </div>
    </div>
  );
}
