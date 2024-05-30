import React from "react";
import { FaSearch, FaUser, FaBookmark, FaShoppingBag } from "react-icons/fa";
import { bag, book, logo, search, useral } from "../images/images";
export default function Navbar() {
  return (
    <div className="bg-black text-[#E5DFD9] h-[105] pb-5">
      <div className="flex justify-between py-5 px-10 flex-1 items-center gap-3">
        <div>
          <img src={logo} />
        </div>
        <div className="flex justify-between gap-5">
          <img src={search} />
          <img src={useral} />
          <img src={book} />
          <img src={bag} />
        </div>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-10  font-normal text-sm font-display">
          <li>Bags</li>
          <li>Travel</li>
          <li>Accesories</li>
          <li>Gifting</li>
          <li>Jewelery</li>
        </ul>
      </div>
    </div>
  );
}

/* Travel */

// position: absolute;
// width: 45px;
// height: 18px;
// left: 489px;
// top: 69px;

// font-family: 'Encode Sans';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 18px;
// /* identical to box height */
// display: flex;
// align-items: center;
// letter-spacing: 0.1em;

// color: #E5DFD9;
