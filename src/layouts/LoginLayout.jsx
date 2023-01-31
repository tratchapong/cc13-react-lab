import React from "react";
import Footer from "../components/Footer";
import Login from "../pages/Login";

function LoginLayout() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-violet-300">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default LoginLayout;
