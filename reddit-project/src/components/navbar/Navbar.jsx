import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Navbar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
  );
}

export default Navbar;
