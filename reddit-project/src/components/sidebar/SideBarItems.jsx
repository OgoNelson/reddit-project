import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid2 } from "@mui/material";

function SideBarItems({ primary, icon, icon2 }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className=" w-full">
      <Grid2>
        <Grid2 item xs={12} md={6}>
          <List sx={{ margin: "0" }}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={handleClicked}
                sx={{
                  padding: "0 0 0 13px",
                  display: "flex",
                  justifyContent: "space-between",
                  height: "5vh",
                  margin: "0",

                  "&:hover": {
                    color: "#ff1800", // Changes all text and icons to red on hover
                    "& .MuiListItemIcon-root": {
                      color: "#ff1800", // Changes the icon color on hover
                    },
                  },
                }}
              >
                <div className="flex items-center   ">
                  <ListItemIcon
                    sx={{
                      color: "black",
                      opacity: "0.5",
                    }}
                  >
                    {icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={primary}
                    primaryTypographyProps={{
                      style: { fontSize: "13px", fontWeight: "550" },
                    }}
                  />
                </div>

                {icon2 ? (
                  <ListItemIcon sx={{ color: "black", opacity: "0.5" }}>
                    {/* {icon2} */}
                    {isClicked ? <KeyboardArrowUpIcon /> : icon2}
                  </ListItemIcon>
                ) : null}
              </ListItemButton>
            </ListItem>
          </List>
          {isClicked && primary === "About" && (
            <div className="h-fit pl-20 text-[13px] border p-2 hover:text-red-300">
              Contact Us
            </div>
          )}
          {isClicked && primary === "Help" && (
            <div className="h-fit pl-20 text-[13px] border hover:text-red-300 p-2 transition left-0">
              <a>Help Center</a>
            </div>
          )}
          {isClicked && primary === "Apps $ Tools" && (
            <div className="h-fit pl-20 text-[13px] mb-5 hover:text-red-300 border p-2 transition left-0">
              Apps $ Tools
            </div>
          )}
          {isClicked && primary === "My subreddits" && (
            <div className="h-fit pl-20 text-[13px] hover:text-red-300 border p-2 transition left-0">
              My subreddits
            </div>
          )}
        </Grid2>
      </Grid2>
    </div>
  );
}

export default SideBarItems;
