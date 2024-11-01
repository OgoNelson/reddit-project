import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ButtonNav from "./ButtonNav";
import { Typography } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="sticky bg-white top-0 h-[12vh] sm:h-[13vh] shadow-gray-500 ">
      <Typography
        variant="h6"
        className="hidden sm:block p-2 bg-white align-middle"
      >
        All subreddits
      </Typography>
      <div className="h-[7.5vh] sm:hidden">
        <ButtonNav />
      </div>
      <div className=" hidden sm:block sm:h-[8vh] shadow-md bg-white">
        <Box
          sx={{
            backgroundColor: "#f0efef",
            color: "#E5E5E5",
          }}
          className="hidden sm:block"
        >
          <Tabs
            className=" shadow-gray-400"
            onChange={handleChange}
            value={value}
            aria-label="Tabs where each tab needs to be selected manually"
          >
            <Tab label="HOT" />

            <Tab underline="hover" label="NEW" />

            <Tab label="RISING" />
            <Tab label="CONTROVERSIAL" />
            <Tab label="TOP" />
            <Tab label="GILED" />
            <Tab label="PROMOTED" />
          </Tabs>
        </Box>
      </div>
      <div className="  sm:hidden h-[5vh] bg-[#E5E5E5]">
        <Typography variant="h7" sx={{ ml: 2 }}>
          Filter by HOT
          <ArrowDropDown sx={{ ml: 3 }} />
        </Typography>
      </div>
    </div>
  );
}

export default Navbar;
