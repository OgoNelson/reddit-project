import React, { useContext, useState } from "react";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Avatar } from "@mui/material";
import { GlobalContext } from "../utilities/GlobalContext";
import { Link } from "react-router-dom";

function PostCard() {
  // Page data from Global Context
  const { pagepostData, setpagePostData, postLike, setPostLike } =
    useContext(GlobalContext);

  const handleCountUp = (id) => {
    setpagePostData((prevData) =>
      prevData.map((post) => {
        // Check if the post's id matches
        if (post.id === id) {
          // Toggle hasVoted and update postLike accordingly
          return {
            ...post,
            postLike: post.hasVoted ? post.postLike - 1 : post.postLike + 1,
            hasVoted: !post.hasVoted,
          };
        }
        return post;
      })
    );
  };

  const handleCountDown = (id) => {
    setpagePostData((prevData) =>
      prevData.map((post) => {
        // Check if the post's id matches
        if (post.id === id) {
          // Toggle hasVoted and update postLike accordingly
          return {
            ...post,
            postLike: post.hasVoted ? post.postLike - 1 : post.postLike + 1,
            hasVoted: !post.hasVoted,
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="mx-[10px] my-[10px] md:mx-[10vw] md:my-[0px]">
      <div className="hidden md:flex items-center justify-center h-[15vh] font-medium text-[1.5em]">
        <h2>Find something interesting to discuss</h2>
      </div>

      <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
        {pagepostData.map((postItem) => (
          <div
            key={postItem.id}
            className="w-[100%] bg-slate-100 shadow-md hover:border-red-900 flex flex-col justify-between"
          >
            {/* Post image */}
            <div className="h-[25vh]">
              <img
                src={postItem.image}
                alt="Post"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Post content */}
            <div className="px-3">
              <h2 className="mb-5 text-start text-pretty">{postItem.post}</h2>
              <p className="mb-5">
                {postItem.time}
                <span className="text-red-400 text-[13px]">
                  <i>
                    <a> {postItem.name}</a>
                  </i>
                </span>
              </p>

              {/* Post interactions */}
              <div className="flex items-center justify-around">
                <div className="flex items-center flex-col">
                  <KeyboardArrowUpIcon
                    // passing the id tp check if it matches in other to increase the count
                    onClick={() => handleCountUp(postItem.id)}
                    sx={{ opacity: "0.5", cursor: "pointer" }}
                  />
                  <p>{postItem.postLike}</p>
                  {/* passing the id tp check if it matches in other to decrease
                  the count */}
                  <KeyboardArrowDownIcon
                    onClick={() => handleCountDown(postItem.id)}
                    sx={{ opacity: "0.5", cursor: "pointer" }}
                  />
                </div>
                <Link to={`/comment/${postItem.id}`}>
                  
                  <div className="flex items-center gap-1">
                    <ModeCommentIcon sx={{ opacity: "0.5" }} />
                    <p>{postItem.postComment}</p>
                  </div>
                </Link>

                <div>
                  <Avatar sx={{ width: "30px", height: "30px" }}>
                    <ShareIcon sx={{ opacity: "0.5", width: "20px" }} />
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostCard;
