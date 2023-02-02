import React, { useState } from "react";
import TwModal from "../components/TwModal";
import { useAuth } from "../contexts/AuthContext";
import Register from "./Register";

function Login() {
  const {isLogin, login} = useAuth()
  const [open, setOpen] = useState(false);

  const hdlSubmit = e => {
    e.preventDefault()
    login()
  }
  return (
    <>
      <form onSubmit={hdlSubmit}>
        <div className="p-4 rounded shadow w-[700px] mx-auto mt-5 bg-white">
          <h1 className="text-3xl text-pink-800">Login</h1>
          <p>Please Login.</p>
          <hr className="border border-slate-200 mb-6" />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            // required
            className="w-full p-4 mt-1 mb-6 inline-block border-none bg-slate-200 focus:bg-slate-300 focus:outline-none"
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            id="psw"
            // required
            className="w-full p-4 mt-1 mb-6 inline-block border-none bg-slate-200 focus:bg-slate-300 focus:outline-none"
          />

          <hr className="border border-slate-200 mb-6" />
          <button
            type="submit"
            className="bg-green-700 text-white py-4 px-5 my-2 border-none cursor-pointer w-full opacity-90 hover:opacity-100"
          >
            {isLogin && 'Logout'}
            {!isLogin && 'Login'}
          </button>
        </div>
      </form>
      <button className="bg-pink-500 p-3 rounded my-3 block mx-auto" onClick={()=>setOpen(true)}>Register Here!!</button>
      <TwModal open={open} doClose={()=>setOpen(false)}>
        <Register />
      </TwModal>
    </>
  );
}

export default Login;
