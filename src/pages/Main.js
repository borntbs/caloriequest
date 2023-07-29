import React, { useState } from "react";
import MainForm from "../components/Main/MainForm";
import LoginBtn from "../components/Main/LoginBtn";
import { nutriAPIGateway } from "../DAL/GET";
import InfoBox from "../components/Main/NutriInfoBox";
import Loader from "../components/Main/Loader";
import LoginModal from "../components/Main/LoginModal";
import ProfileNav from "../components/Main/ProfileNav";

const Main = (props) => {
  const [infoBoxStatus, setInfoBoxStatus] = useState({ open: false, data: {} });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState({ status: false, Email: "" });

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

  const registerUser = async () => {
    let pw;
    let email;
    email = document.querySelector("#login-email").value;
    pw = document.querySelector("#login-password").value;
    const params = {
      TableName: "CalorieQuestUsers",
      Item: {
        Password: pw,
        Email: email,
      },
    };
    const response = await fetch(
      "https://j8sa414f2f.execute-api.ap-southeast-2.amazonaws.com/CQUsers",
      {
        headers: {
          login: false,
        },
        method: "POST",
        body: JSON.stringify(params),
      }
    );

    console.log(response);
    const resJSON = await response.json();
    console.log(resJSON);
  };

  const handleLogin = async () => {
    let pw;
    let email;
    email = document.querySelector("#login-email").value;
    pw = document.querySelector("#login-password").value;
    const params = {
      Password: pw,
      Email: email,
    };
    const response = await fetch(
      "https://j8sa414f2f.execute-api.ap-southeast-2.amazonaws.com/CQUsers",
      {
        headers: {
          login: true,
        },
        method: "POST",
        body: JSON.stringify(params),
      }
    );
    console.log(response);
    const resJSON = await response.json();
    console.log(resJSON);
    if (resJSON.details === "Login Success") {
      setLogin({ status: true, Email: email });
      setModal(false);
    }
  };

  const handleModal = (e) => {
    setModal(!modal);
  };

  const mainFormProps = {
    getNutriInfo: getNutriInfo,
    handleModal: handleModal,
    login: login,
  };

  const infoBoxProps = {
    nutriData: infoBoxStatus.data,
  };

  const modalProps = {
    handleModal: handleModal,
    registerUser: registerUser,
    handleLogin: handleLogin,
  };

  const loginBtnProps = {
    handleModal: handleModal,
  };

  return (
    <div className="h-[100vh] flex items-center flex-col justify-around md:flex-row lg:justify-center lg:gap-[13em] bg-amber-100">
      {modal && <LoginModal props={modalProps} />}
      {!login.status && <LoginBtn props={loginBtnProps} />}
      {login.status && <ProfileNav />}
      <div className="flex-grow bg-amber-100 h-full flex flex-col md:justify-between lg:justify-center md:flex-row lg:gap-[20em] items-center">
        <div className="max-w-fit min-w-fit">
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
    </div>
  );
};

export default Main;
