import React from "react";
import ProfilePanel from "../components/Profile/ProfilePanel";
import ProfileNav from "../components/Main/ProfileNav";

const Profile = ({ props }) => {
  return (
    <div className="w-full h-full flex flex-row">
      <ProfileNav />
      <ProfilePanel />
    </div>
  );
};

export default Profile;
