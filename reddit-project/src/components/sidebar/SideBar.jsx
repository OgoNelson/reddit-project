import React, { useState } from "react";

import SideBarItems from "./SideBarItems";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import HelpIcon from "@mui/icons-material/Help";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoIcon from "@mui/icons-material/Info";
import SideBarLogo from "./SideBarLogo";
import SideBarSearch from "./SideBarSearch";

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
          <SideBarItems primary="Home" icon={<HomeIcon />} />
          <SideBarItems
            primary="Notification"
            icon={<NotificationsNoneIcon />}
          />
          <SideBarItems
            primary="My subreddits"
            icon={<ViewQuiltIcon />}
            icon2={<MoreVertIcon />}
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
          icon={<InfoIcon />}
          icon2={<KeyboardArrowDownIcon />}
        />

        <SideBarItems
          primary="Help"
          icon={<HelpIcon />}
          icon2={<KeyboardArrowDownIcon />}
        />
        <SideBarItems
          primary="Apps $ Tools"
          icon={<SettingsApplicationsIcon />}
          icon2={<KeyboardArrowDownIcon />}
        />
      </div>
    </div>
  );
}

export default SideBar;
