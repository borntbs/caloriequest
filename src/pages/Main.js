import React, { useState } from "react";
import MainForm from "../components/Main/MainForm";

const Main = (props) => {
  const [selectedSize, setSelectedSize] = useState("lb");

  const handleSwitchSize = (e) => {
    setSelectedSize(e.currentTarget.innerHTML);
  };

  const formProps = {
    size: selectedSize,
    handleSwitchSize: handleSwitchSize,
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
        <MainForm props={formProps} />
      </div>
    </div>
  );
};

export default Main;
