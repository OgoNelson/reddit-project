import React, { useState } from "react";
import PageData from "./PageData";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function PostCard() {
  const [data, setData] = useState(PageData);

  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
      {data.map((postItem) => (
        <div
          key={postItem.id}
          className="w-[100%] bg-slate-100 shadow-md hover:border-red-900  "
        >
          {/* image */}
          <div className="h-[25vh] ">
            <img
              src={postItem.image}
              alt="Post"
              className="h-full w-full object-cover"
            />
          </div>
          {/* post content */}
          <div className="p-3 flex flex-col  ">
            <div>
              <h2 className="mb-5">{postItem.post}</h2>
              <p className="mb-5">{postItem.time}</p>
            </div>
            {/* share buttons */}
            <div className="flex items-center justify-around ">
              <div className="flex items-center flex-col">
                <KeyboardArrowUpIcon />
                <p>{postItem.postLike}</p>
                <KeyboardArrowDownIcon />
              </div>
              <div className="flex items-center gap-1">
                <ModeCommentIcon />
                <p>{postItem.postComment}</p>
              </div>
              <div>
                <ShareIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostCard;
