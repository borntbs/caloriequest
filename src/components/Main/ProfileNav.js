import React from "react";
import { homeIcon, profileIcon, graphIcon, logoutIcon } from "../svg";
import { NavLink } from "react-router-dom";

const ProfileNav = ({ props }) => {
  const CSS = {
    navTextClassName:
      "w-0 overflow-hidden text-black group-hover:w-[5em] transition-all duration-200 group-hover/navLink:text-white font-bold",
    navLinkClassName:
      "flex flex-row group/navLink items-center justify-center hover:cursor-pointer hover:text-white",
    logoutLinkClassName: "flex flex-row flex-grow items-end justify-center",
    logoutTextClassName:
      "w-0 overflow-hidden text-black group-hover:w-[5em] transition-all duration-200 group-hover/LogoutLink:text-red-600 font-bold",
  };
  return (
    <div
      className="flex flex-col h-full w-[4em] hover:w-[15em]
    transition-all duration-300 bg-amber-300 group"
    >
      <div className="flex flex-col text-2xl my-[2em] gap-5 h-[100%]">
        <NavLink to="/home" className={CSS.navLinkClassName}>
          <span className={CSS.navTextClassName}>Home</span>
          {homeIcon}
        </NavLink>
        <NavLink to="/profile" className={CSS.navLinkClassName}>
          <span className={CSS.navTextClassName}>Profile</span>
          {profileIcon}
        </NavLink>
        <div className={CSS.navLinkClassName}>
          <span className={CSS.navTextClassName}>Statistics</span>
          {graphIcon}
        </div>
        <div className={CSS.logoutLinkClassName}>
          <div className="group/LogoutLink flex flex-row items-center hover:cursor-pointer">
            <span className={CSS.logoutTextClassName}>Logout</span>
            {logoutIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
