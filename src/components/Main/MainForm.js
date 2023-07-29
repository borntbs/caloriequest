import React, { useState, useEffect } from "react";
import { arrowDown } from "../svg";

const MainForm = ({ props }) => {
  const ServingSizes = ["lb", "oz", "kg", "g"];
  const [selectedSize, setSelectedSize] = useState("g");
  const [foodItem, setFoodItem] = useState("");
  const [servingSize, setServingSize] = useState(100);
  const [login, setLogin] = useState({ status: false, Email: "" });

  const handleSwitchSize = (e) => {
    setSelectedSize(e.currentTarget.innerHTML);
    handleDropdown();
  };

  useEffect(() => {
    setFoodItem("");
    setServingSize(100);
    setLogin(props.login);
  }, [props]);

  const genSizeOptions = () => {
    const sizes = [];
    const className =
      "w-20 text-center font-bold text-sm hover:cursor-pointer hover:bg-slate-200";
    ServingSizes.forEach((s) => {
      if (s !== selectedSize) {
        sizes.push(
          <tr key={crypto.randomUUID()}>
            <td className={className} onClick={handleSwitchSize}>
              {s}
            </td>
          </tr>
        );
      }
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
      className="border-solid border-gray-500 border-[3px] py-[3em] px-[5em] flex flex-col gap-3 rounded-2xl"
      onSubmit={props.getNutriInfo}
    >
      <header className="justify-self-center w-fit text-xl font-bold flex-row flex justify-items-center items-center mb-3 gap-2">
        <span>Calorie Quest</span>
        <img
          src="https://soco-st.com/wp-content/themes/socost/upload/15904_color.svg"
          className="w-7 h-7"
          alt="Farmer holding vegetables"
        ></img>
      </header>
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Food Item"
          id="foodItem"
          className="appearance-none peer pl-1 shadow-inner rounded-lg h-[2.1em] select-none"
          autoComplete="off"
          onChange={(e) => {
            setFoodItem(e.target.value);
          }}
          value={foodItem}
          autoFocus
          required
        />
        {/* <div className="h-[2px] bg-black w-0 peer-focus:w-[50%] transition-all duration-500"></div> */}
      </div>

      <div className="flex flex-row gap-1">
        <div className="flex flex-col gap-1 select-none">
          <input
            type="number"
            placeholder="Serving Size"
            id="servingSize"
            className="peer pl-1 flex-grow shadow-inner rounded-lg "
            onChange={(e) => {
              setServingSize(e.target.value);
            }}
            value={servingSize}
            required
          />
        </div>

        <div className="flex flex-col gap-1 relative">
          <div
            onClick={handleDropdown}
            className="select-none group inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:cursor-pointer"
          >
            <span id="selectedSize" className="font-bold">
              {selectedSize}
            </span>
            {arrowDown}
          </div>
          <div
            id="sizeOptions"
            className="absolute top-8 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dropdown flex flex-col gap-2"
          >
            {genSizeOptions()}
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <button
          type="submit"
          className="border-green-300 border-2 rounded-xl w-[10em] hover:bg-transparent bg-green-700 text-white hover:text-black transition-colors hover:border-green-700 font-bold mt-2"
        >
          {"Find Nutri Info"}
        </button>
        <div className="relative">
          <button
            type="button"
            className="border-amber-300 border-2 rounded-xl w-[10em] hover:bg-transparent bg-amber-700 text-white hover:text-black transition-colors hover:border-amber-700 font-bold mt-2 peer"
            onClick={props.handleModal}
          >
            {"Save"}
          </button>
          {!login.status && (
            <div className="bg-amber-300 opacity-0 peer-hover:opacity-100 transition-opacity duration-500 p-3 text-md rounded-xl absolute mt-3">
              Login to save your foods!
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default MainForm;
