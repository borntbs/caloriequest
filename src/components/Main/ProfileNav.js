import React from "react";
import { profileIcon, graphIcon } from "../svg";

const ProfileNav = ({ props }) => {
  const CSS = {
    navTextClassName:
      "w-0 text-transparent group-hover:text-black group-hover:w-[5em] transition-all duration-200 group-hover/navLink:text-white",
    navLinkClassName:
      "flex flex-row group/navLink items-center justify-center hover:cursor-pointer hover:text-white",
  };
  return (
    <div
      className="flex flex-col h-full w-[4em] hover:w-[15em]
    transition-all duration-300 bg-amber-300 group"
    >
      <div className="flex flex-col text-2xl mt-[2em] gap-5">
        <div className={CSS.navLinkClassName}>
          <span className={CSS.navTextClassName}>Profile</span>
          {profileIcon}
        </div>
        <div className={CSS.navLinkClassName}>
          <span className={CSS.navTextClassName}>Statistics</span>
          {graphIcon}
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
