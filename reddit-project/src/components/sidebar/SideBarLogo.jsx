import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
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

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md")); // For screens md and up
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg")); // For screens lg and up
  return (
    <div className="relative border-b-[1px]">
      <Box className="h-[13vh]  flex flex-col justify-center ">
        <img
          className=" ml-[10px] md:w-[15vw] md:h-[4vh] lg:w-[6vw] lg:h-[5vh]"
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
                  primaryTypographyProps={{
                    fontSize: isLargeScreen
                      ? "10px"
                      : isMediumScreen
                      ? "18px"
                      : "13px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
      {isUserEmai && (
        <div className="absolute z-20 h-fit p-4 bg-stone-100 border shadow-md w-full  transition">
          <ul className="">
            <ListItemButton
              disablePadding
              onClick={handleEmail2}
              className="p-2 text-[13px] shadow-sm mb-2 hover:text-red-400 transition"
            >
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: "13px" },
                }}
                primary={
                  mailDisplay === "kikoherrsc@gmail.com"
                    ? "kikoherrsc@gmail.com"
                    : "Onyeka092@gmail.com"
                }
              />
            </ListItemButton>
            <ListItemButton
              disablePadding
              onClick={handleEmail1}
              className="p-2 text-[13px] shadow-sm mb-2 hover:text-red-400 transition"
            >
              <ListItemText
                primaryTypographyProps={{
                  style: { fontSize: "13px" },
                }}
                primary={
                  mailDisplay === "kikoherrsc@gmail.com"
                    ? "kikoherrsc@gmail.com"
                    : "Osonwap083@gmail.com"
                }
              />
            </ListItemButton>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBarLogo;
