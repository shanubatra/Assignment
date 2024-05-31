import React, { useState } from "react";
import { logo } from "../images/images";
import { icons, navLinks } from "../Constant";
import { FaBarsStaggered } from "react-icons/fa6";
export default function Navbar() {
  let [toggle, setToggle] = useState(true);
  return (
    <div className="bg-black text-[#E5DFD9] lg:pb-5 md:pb-0">
      <div className="flex justify-between py-5 px-10 flex-1 items-center gap-3">
        <div>
          <img alt="logo" src={logo} />
        </div>
        <div className="lg:flex justify-between gap-5 hidden ">
          {icons.map((item, index) => {
            return <img key={index} alt={item.title} src={item.icon} />;
          })}
        </div>
        <div className="ml-2 lg:hidden">
          {toggle ? (
            ""
          ) : (
            <div className="fixed right-0 bottom-0 w-[60%] h-full bg-black z-50 text-white">
              <div>
                <div>
                  <button
                    className="top-0 left-0 mt-8 ml-6 "
                    onClick={() => setToggle(true)}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex justify-between gap-5 px-4 py-5 mt-2">
                  {icons.map((item, index) => {
                    return <img key={index} alt={item.title} src={item.icon} />;
                  })}
                </div>
                <div className="flex justify-center items-center flex-col text-xl capitalize font-display font-bold h- mx-auto px-6 py-8 gap-20">
                  <ul>
                    {navLinks.map((item, index) => {
                      return (
                        <li className="m-4" key={index}>
                          {item.title}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          )}
          <button>
            <FaBarsStaggered
              className="w-7 h-8 text-white"
              onClick={() => setToggle(false)}
            />
          </button>
        </div>
      </div>
      <div>
        <ul className="lg:flex justify-center items-center gap-10  font-normal text-sm font-display hidden">
          {navLinks.map((item, index) => {
            return <li key={index}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
