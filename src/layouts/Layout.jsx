import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="bg-pink-100 flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
