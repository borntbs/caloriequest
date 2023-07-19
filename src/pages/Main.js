import React, { useState } from "react";
import MainForm from "../components/Main/MainForm";
import LoginBtn from "../components/LoginBtn";
import { nutriAPIGateway } from "../DAL/GET";
import InfoBox from "../components/Main/NutriInfoBox";
import Loader from "../components/Main/Loader";

const Main = (props) => {
  const [infoBoxStatus, setInfoBoxStatus] = useState({ open: false, data: {} });
  const [loading, setLoading] = useState(false);

  const getNutriInfo = async (e) => {
    setLoading(true);
    const sizeSuffix = e.currentTarget.querySelector("#selectedSize").innerHTML;
    const size =
      e.currentTarget.querySelector("#servingSize").value + sizeSuffix;
    let food = e.currentTarget.querySelector("#foodItem").value;
    food = food.split(" ").join("%20");

    e.preventDefault();
    let response;
    try {
      response = await fetch(nutriAPIGateway + `?size=${size}&food=${food}`, {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setInfoBoxStatus({ open: true, data: data });
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    return;
  };

  const mainFormProps = {
    getNutriInfo: getNutriInfo,
  };

  const infoBoxProps = {
    nutriData: infoBoxStatus.data,
  };

  return (
    <div className="h-[100vh] flex items-center flex-col justify-around md:flex-row lg:justify-center lg:gap-[20em] bg-amber-100">
      <div className="max-w-fit">
        <LoginBtn />
        <img
          src="https://soco-st.com/wp-content/themes/socost/upload/7281_color.svg"
          alt="Man on diet restrictions"
        ></img>
      </div>
      <div className="gap-5 flex flex-col">
        <MainForm props={mainFormProps} />
        {infoBoxStatus.open && <InfoBox props={infoBoxProps} />}
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Main;
