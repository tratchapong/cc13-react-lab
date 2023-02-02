import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../pages/Login";

function LoginLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 bg-violet-300">
        <Login />
      </div>
      <Footer />
    </div>
  );
}

export default LoginLayout;
