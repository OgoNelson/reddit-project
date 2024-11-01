import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { GlobalContext } from "../utilities/GlobalContext";

function SideBarSearch() {
  // Accessing page data from Global Context
  const { pagepostData, setpagePostData } = useContext(GlobalContext);
  const [output, setOutput] = useState("");

  // For the search input
  const [searchBtn, setSearchBtn] = useState("");

  function handleSearchValue(e) {
    setSearchBtn(e.target.value);
    handleSearch(e.target.value);
  }

  const handleSearch = (searchTerm) => {
    const result = pagepostData.filter((el) =>
      el.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (result.length > 0) {
      setpagePostData(result);

      // Update with filtered results
      setTimeout(() => {
        setOutput("");
      }, 3000);

      // Clear the "not found" message
    } else if (result.length === 0) {
      setpagePostData(pagepostData);
      setOutput("Sorry, nothing found!");
      // Clear the output and input after 3 seconds
      setTimeout(() => {
        setOutput("");
        setSearchBtn("");
      }, 3000);
    }
  };

  return (
    <div>
      <div className="mt-[10px] flex items-center border-[1px] px-3 py-2 mx-2 rounded-sm">
        <SearchIcon sx={{ opacity: "0.5", width: "18px" }} />
        <input
          onChange={handleSearchValue}
          value={searchBtn}
          className="outline-0 text-[11px]"
          type="text"
          placeholder="         Search"
        />
      </div>
      {/* Display output message if no result */}
      {output && <p className="text-red-500 text-[10px] ml-6 pt-3">{output}</p>}
    </div>
  );
}

export default SideBarSearch;
