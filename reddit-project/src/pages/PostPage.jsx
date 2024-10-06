import React from "react";
import PostCard from "../components/post/PostCard";
import Navbar from "../components/navbar/Navbar";
import ButtonNav from "../components/navbar/ButtonNav";
import { Typography } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
function PostPage() {
  return (
    <div>
      <div>
        <div className="sticky top-0 h-[12vh] sm:h-[18vh] shadow-gray-500">
          <Typography
            variant="h6"
            className="hidden sm:block h-[10vh] bg-white align-middle"
          >
            All subreddits
          </Typography>
          <div className="h-[7.5vh] sm:hidden">
            <ButtonNav />
          </div>
          <div className="h-[8vh] hidden sm:block">
            <Navbar />
          </div>
          <div className="h-[5vh] sm:hidden bg-[#E5E5E5]">
            <Typography variant="h7" sx={{ ml: 2 }}>
              Filter by HOT
              <ArrowDropDown sx={{ ml: 3 }} />
            </Typography>
          </div>
        </div>

        <div>
          <PostCard />
        </div>
      </div>
    </div>
  );
}

export default PostPage;
