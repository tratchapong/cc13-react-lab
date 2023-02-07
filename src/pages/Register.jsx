import React, {  useState } from "react";
import axios from "axios";



function Register({doClose}) {
  const [formdata, setFormdata] = useState({});


  const hdlSubmit = async (e) => {
    e.preventDefault();
    // console.log(formdata);
    await axios.post('http://localhost:8000/users', formdata)
    doClose()
  };

  const hdlChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={hdlSubmit}>
      <div className="p-4 rounded shadow w-[700px] mx-auto mt-5 bg-white">
        <h1 className="text-3xl text-pink-800">Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr className="border border-slate-200 mb-6" />

        <label htmlFor="user-r">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter username"
          name="name"
          id="user-r"
          onChange={hdlChange}
          className="w-full p-4 mt-1 mb-6 inline-block border-none bg-slate-200 focus:bg-slate-300 focus:outline-none"
        />

        <label htmlFor="psw-r">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          id="psw-r"
          onChange={hdlChange}
          className="w-full p-4 mt-1 mb-6 inline-block border-none bg-slate-200 focus:bg-slate-300 focus:outline-none"
        />

        <label htmlFor="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          id="psw-repeat"
          className="w-full p-4 mt-1 mb-6 inline-block border-none bg-slate-200 focus:bg-slate-300 focus:outline-none"
        />
        <hr className="border border-slate-200 mb-6" />
        <button
          type="submit"
          className="bg-green-700 text-white py-4 px-5 my-2 border-none cursor-pointer w-full opacity-90 hover:opacity-100"
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default Register;
