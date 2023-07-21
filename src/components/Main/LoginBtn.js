import React from "react";

const LoginBtn = ({ props }) => {
  return (
    <div className="absolute top-5 right-5 flex flex-col justify-items-center items-center gap-3">
      <button
        className="peer py-2 text-lg px-5 bg-amber-400 rounded-xl w-fit"
        type="button"
        onClick={props.handleModal}
      >
        Login
      </button>
      <div className="bg-amber-300 opacity-0 peer-hover:opacity-100 transition-opacity duration-500 p-3 text-md rounded-xl">
        Login to view your profile!
      </div>
    </div>
  );
};

export default LoginBtn;
