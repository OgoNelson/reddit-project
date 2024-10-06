import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

function CommentNav() {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="text-white text-[12px] flex items-center gap-2">
        <Link to="/">
          <ArrowBackIcon sx={{ color: "black" }} />
        </Link>

        <p>Today i Learned</p>
        <p className="py-1 px-2 rounded-2xl border-2 border-white">
          Subscribe subreddit
        </p>
      </div>
      <div>
        <InfoIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
}

export default CommentNav;
