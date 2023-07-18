import React, { useState, useEffect } from "react";

const Main = (props) => {
  const ServingSizes = ["lb", "oz", "kg", "g"];

  const handleSwitchSize = (e) => {
    console.log(e.currentTarget);
  };

  const genSizeOptions = () => {
    const sizes = [];
    const className =
      "w-20 text-center font-bold text-sm hover:cursor-pointer hover:bg-slate-200";
    ServingSizes.forEach((s) => {
      sizes.push(
        <tr key={crypto.randomUUID()}>
          <td className={className} onClick={handleSwitchSize}>
            {s}
          </td>
        </tr>
      );
    });
    return (
      <table className="table-auto">
        <tbody>{sizes}</tbody>
      </table>
    );
  };

  const handleDropdown = (e) => {
    document.querySelector("#sizeOptions").classList.toggle("active");
  };

  return (
    <div className="h-[100vh] flex items-center flex-col justify-around md:flex-row lg:justify-center lg:gap-[20em] ">
      <div className="max-w-fit">
        <img
          src="https://soco-st.com/wp-content/themes/socost/upload/7281_color.svg"
          alt="Man on diet restrictions"
        ></img>
      </div>
      <div>
        <form className="border-solid border-gray-500 border-[2px] py-[3em] px-[5em] flex flex-col gap-2">
          <input type="text" placeholder="Food Item" />
          <div className="flex flex-row gap-1">
            <input type="number" placeholder="Serving Size" />

            <div className="flex flex-col gap-1 relative">
              <div
                onClick={handleDropdown}
                className="group inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
              >
                <span id="selectedSize" className="font-bold">
                  {ServingSizes[0]}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              <div
                id="sizeOptions"
                className="absolute top-8 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dropdown flex flex-col gap-2"
              >
                {genSizeOptions()}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
