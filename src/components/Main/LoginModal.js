import React from "react";

const LoginModal = ({ props }) => {
  const inputCSS = "shadow-inner pl-1";
  return (
    <div className="absolute z-10 bg-black h-full w-full flex items-center justify-center bg-opacity-30">
      <div className="bg-white h-[30%] w-[30%] min-h-fit min-w-fit relative z-10 bg-opacity-80 rounded-xl border-solid border-gray-400 flex flex-col">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 absolute top-2 right-2 text-red-600 font-bold hover:text-gray-500 hover:cursor-pointer z-10"
          onClick={props.handleModal}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        {/* <div className="flex flex-row text-2xl justify-center ">
        
          <div className="hover:cursor-pointer bg-slate-300 text-center flex-grow rounded-tl-xl flex justify-center ">
            <span className="bg-green-400 p-3">Login</span>
          </div>
          <div className="hover:cursor-pointer bg-slate-300 flex-grow text-center rounded-tr-xl flex justify-center">
            <span className="bg-amber-300 p-3">Create Account</span>
          </div>
        </div> */}

        <div className="flex flex-col h-full justify-center gap-3 p-4 relative">
          <label htmlFor="username" className="font-bold hidden">
            Username
          </label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            autoComplete="off"
            className={inputCSS + " hidden"}
            id="login-username"
          ></input>
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="off"
            className={inputCSS}
            id="login-email"
          ></input>
          <label htmlFor="password" className="font-bold">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="off"
            className={inputCSS}
            id="login-password"
          ></input>
          <div className="flex flex-col sm:justify-items-center items-center sm:flex-row gap-3">
            <button
              type="button"
              className=" border-green-300 border-2 rounded-xl w-[10em] hover:bg-transparent bg-green-700 text-white hover:text-black transition-colors hover:border-green-700 font-bold mt-2"
              onClick={props.handleLogin}
            >
              Login
            </button>
            <button
              type="button"
              className="border-amber-300 border-2 rounded-xl w-[10em] hover:bg-transparent bg-amber-700 text-white hover:text-black transition-colors hover:border-amber-700 font-bold mt-2"
              onClick={props.registerUser}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
