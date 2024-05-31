import React, { useEffect, useState } from "react";

import axios from "axios";

import { ellipse, vector } from "../images/images.jsx";

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
      <div >
        <BagsCard />
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <div>
          <img src={ellipse} alt="ellipse" />
        </div>
        <div className="flex justify-between items-center">
          <p>{data.length} Products</p>
          <img src={vector} alt="vector" />
        </div>
      </div>
      <div>
        <ProductCard data={data} />
      </div>
    </div>
  );
}
