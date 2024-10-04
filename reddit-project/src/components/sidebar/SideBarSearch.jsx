import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SideBarSearch() {
  return (
    <div className="mt-[10px] flex  items-center border-[1px] px-3 py-2 mx-2 rounded-sm">
      <SearchIcon sx={{ opacity: "0.5", width: "18px" }} />
      <input
        className="outline-[0] text-[11px]"
        type="text"
        placeholder="         Search"
      />
    </div>
  );
}

export default SideBarSearch;
