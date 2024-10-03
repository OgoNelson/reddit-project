import React, { useState } from "react";
// import RedditLogo from "../../../public/";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function SideBarLogo() {
  const [isUserEmai, setIsUserEmai] = useState(false);
  const [mailDisplay, setMailDisplay] = useState("kikoherrsc@gmail.com");
  const handleUserEmail = () => {
    setIsUserEmai(!isUserEmai);
  };
  const handleEmail1 = () => {
    setMailDisplay("osonwap083@gmail.com");
    setIsUserEmai(false);
  };
  const handleEmail2 = () => {
    setMailDisplay("Onyeka092@gmail.com");
    setIsUserEmai(false);
  };
  return (
    <div className="relative">
      <Box className="h-[13vh]  flex flex-col justify-center ">
        <img
          className=" ml-[10px] md:w-[8vw] md:h-[6vh]"
          src="/Reddit-Logo.png"
          alt="reddit-logo"
        />
        <Box>
          <List
            onClick={handleUserEmail}
            sx={{ margin: "0", padding: "0", paddingTop: "-20px" }}
          >
            <ListItem disablePadding secondaryAction={<ArrowDropDownIcon />}>
              <ListItemButton>
                <ListItemText
                  primary={mailDisplay}
                  primaryTypographyProps={{ style: { fontSize: "13px" } }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider />
      </Box>
      {isUserEmai && (
        <div className="absolute z-20 h-fit p-4 bg-white w-full shadow-lg transition">
          <ul className="">
            <ListItemButton
              disablePadding
              onClick={handleEmail1}
              className="p-2 text-[13px] shadow-sm mb-2 hover:text-red-400 transition"
            >
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: "13px" },
                }}
                primary="Onyeka092@gmail.com"
              />
            </ListItemButton>
            <ListItemButton
              disablePadding
              onClick={handleEmail2}
              className="p-2 text-[13px] shadow-sm mb-2 hover:text-red-400 transition"
            >
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: "13px" },
                }}
                primary="osonwa@gmail.com"
              />
            </ListItemButton>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBarLogo;
