import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

function HomePage() {
  return (
    <div className="grid grid-cols-1 h-[100vh] sm:grid-cols-7 ">
      <div className="hidden sm:block col-span-1 ">
        <SideBar />
      </div>

      <div className="bg-stone-600 col-span-6">
        <div className="bg-pink-600 h-[13vh]">
          <Navbar />
        </div>

        <div className="bg-blue-200 h-[85vh]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
