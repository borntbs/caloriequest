import React, { useState, useEffect } from "react";
import { getNutriInfo } from "../../DAL/GET";

const MainForm = ({ props }) => {
  const ServingSizes = ["lb", "oz", "kg", "g"];

  const genSizeOptions = () => {
    const sizes = [];
    const className =
      "w-20 text-center font-bold text-sm hover:cursor-pointer hover:bg-slate-200";
    ServingSizes.forEach((s) => {
      sizes.push(
        <tr key={crypto.randomUUID()}>
          <td className={className} onClick={props.handleSwitchSize}>
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
    <form
      className="border-solid border-gray-500 border-[2px] py-[3em] px-[5em] flex flex-col gap-2"
      onSubmit={getNutriInfo}
    >
      <input type="text" placeholder="Food Item" id="foodItem" />
      <div className="flex flex-row gap-1">
        <input type="number" placeholder="Serving Size" id="servingSize" />

        <div className="flex flex-col gap-1 relative">
          <div
            onClick={handleDropdown}
            className="group inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
          >
            <span id="selectedSize" className="font-bold">
              {props.size}
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
      <button type="submit">Find Nutri Info</button>
    </form>
  );
};

export default MainForm;
