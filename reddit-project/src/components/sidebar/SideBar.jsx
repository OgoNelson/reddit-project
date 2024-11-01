import React, { useState } from "react";
// All Material icones
import SideBarItems from "./SideBarItems";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import HelpIcon from "@mui/icons-material/Help";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SideBarLogo from "./SideBarLogo";
import SideBarSearch from "./SideBarSearch";
import BuildIcon from "@mui/icons-material/Build";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="shadow-lg bg-white/50  h-[100vh] flex flex-col  justify-between items-center ">
      <div className=" h-[70%]">
        {/*  Logo Component */}
        <SideBarLogo />
        {/* Search Component */}
        <SideBarSearch />

        {/* Sidebar Buttons */}
        <div>
          <Link to="/">
            <SideBarItems
              primary="Home"
              icon={<HomeIcon sx={{ width: "20px" }} />}
            />
          </Link>

          <SideBarItems
            primary="Notification"
            icon={<NotificationsNoneIcon sx={{ width: "20px" }} />}
          />
          <SideBarItems
            primary="My subreddits"
            icon={<ViewQuiltIcon sx={{ width: "20px" }} />}
            icon2={<MoreVertIcon sx={{ width: "20px" }} />}
          />
          <SideBarItems primary="Gaming" />
          <SideBarItems primary="Funny" />
          <SideBarItems primary="Series" />
        </div>
      </div>

      {/*Buttons aligned at the end  */}
      <div className="bg-white">
        <hr />
        <SideBarItems
          primary="About"
          icon={<SupportAgentIcon sx={{ width: "20px" }} />}
          icon2={<KeyboardArrowDownIcon sx={{ width: "20px" }} />}
        />

        <SideBarItems
          primary="Help"
          icon={<HelpIcon sx={{ width: "20px" }} />}
          icon2={<KeyboardArrowDownIcon sx={{ width: "20px" }} />}
        />
        <SideBarItems
          primary="Apps $ Tools"
          icon={<BuildIcon sx={{ width: "20px" }} />}
          icon2={<KeyboardArrowDownIcon sx={{ width: "20px" }} />}
        />
      </div>
    </div>
  );
}

export default SideBar;
