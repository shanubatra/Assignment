import React from "react";
import { logo } from "../images/images";
import { icons, navLinks } from "../Constant";
export default function Navbar() {
  return (
    <div className="bg-black text-[#E5DFD9] h-[105] pb-5">
      <div className="flex justify-between py-5 px-10 flex-1 items-center gap-3">
        <div>
          <img alt="logo" src={logo} />
        </div>
        <div className="flex justify-between gap-5">
          {icons.map((item, index) => {
            return <img key={index} alt={item.title} src={item.icon} />;
          })}
        </div>
      </div>
      <div>
        <ul className="flex justify-center items-center gap-10  font-normal text-sm font-display">
          {navLinks.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}