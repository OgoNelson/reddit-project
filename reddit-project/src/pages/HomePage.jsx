import React from "react";
// import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="grid grid-cols-1 h-[100vh] sm:grid-cols-7  ">
      <div className="hidden sm:block col-span-1 md:col-span-2 lg:col-span-1  ">
        <SideBar />
      </div>

      <div className=" h-[100vh] sm:h-[100vh] sm:col-span-6 md:col-span-5 lg:col-span-6 pb-5  overflow-y-scroll ">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
