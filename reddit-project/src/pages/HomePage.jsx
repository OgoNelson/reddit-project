import React from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import ButtonNav from "../components/navbar/ButtonNav";
import { Typography } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

function HomePage() {
  return (
    <div className="grid grid-cols-1 h-[100vh] sm:grid-cols-7  ">
      <div className="hidden sm:block col-span-1 md:col-span-2 lg:col-span-1  ">
        <SideBar />
      </div>

      <div className="bg-stone-600 col-span-6">
        <div className="h-[12vh] sm:h-[18vh] shadow-gray-500">
          <Typography
            variant="h6"
            className="hidden sm:block h-[10vh] bg-white align-middle"
          >
            All subreddits
          </Typography>
          <div className="h-[7.5vh] sm:hidden">
            <ButtonNav />
          </div>
          <div className="h-[8vh] hidden sm:block">
            <Navbar />
          </div>
          <div className="h-[5vh] sm:hidden bg-[#E5E5E5]">
            <Typography variant="h7" sx={{ ml: 2 }}>
              Filter by HOT
              <ArrowDropDown sx={{ ml: 3 }} />
            </Typography>
          </div>
        </div>
        <div className="bg-stone-100 h-[88vh] sm:h-[82vh] p-[1em] overflow-y-scroll lg:p-[8em]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
