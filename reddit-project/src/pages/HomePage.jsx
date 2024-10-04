import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import ButtonNav from "../components/navbar/ButtonNav";
import { Typography } from "@mui/material";

function HomePage() {
  return (
    <div className="grid grid-cols-1 h-[100vh] sm:grid-cols-7  ">
      <div className="hidden sm:block col-span-1 md:col-span-2 lg:col-span-1  ">
        <SideBar />
      </div>

      <div className="bg-stone-600 col-span-6">
        <div className="h-[10vh] sm:h-[18vh] shadow-gray-500">
          <Typography
            variant="h6"
            className="hidden sm:block h-[10vh] bg-white align-middle"
          >
            All subreddits
          </Typography>
          <div className="h-[10vh] sm:hidden">
            <ButtonNav />
          </div>
          <div className="h-[8vh] hidden">
            <Navbar />
          </div>
          <Typography className="sm:hidden bg-[#E5E5E5]">Filter by </Typography>
        </div>
        <div className="bg-stone-100 h-[85vh] p-[1em] overflow-y-scroll lg:p-[8em]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
