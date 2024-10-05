import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

function ButtonNav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="flex justify-between">
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ color: grey[600] }} />
            </IconButton>
            <IconButton>
              <img src="/Reddit-Logo.png" alt="" className="h-[4vh]" />
            </IconButton>
          </div>
          <IconButton
            className=" justify-end"
            size="large"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon sx={{ color: grey[600] }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonNav;
