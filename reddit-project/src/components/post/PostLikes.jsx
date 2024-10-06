import React, { useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { GlobalContext } from "../utilities/GlobalContext";

function PostLikes() {
  const { pagepostData, setpagePostData } = useContext(GlobalContext);

  const toggleLike = (id) => {
    setpagePostData((prevData) =>
      prevData.map((post) => {
        if (post.id === id) {
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
    <div>
      {pagepostData.map((postItem) => (
        <div key={postItem.id} className="flex items-center flex-col">
          <KeyboardArrowUpIcon
            onClick={() => toggleLike(postItem.id)}
            sx={{ opacity: "0.5", cursor: "pointer" }}
          />
          <p>{postItem.postLike}</p>
          <KeyboardArrowDownIcon
            onClick={() => toggleLike(postItem.id)}
            sx={{ opacity: "0.5", cursor: "pointer" }}
          />
        </div>
      ))}
    </div>
  );
}

export default PostLikes;
