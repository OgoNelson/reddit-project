import React from "react";
import PostCard from "../components/post/PostCard";
import Navbar from "../components/navbar/Navbar";

function PostPage() {
  return (
    <div>
      <div className="shadow-lg sticky top-0 bg-white  h-[13vh] p-4">
        <Navbar />
      </div>
      <PostCard />
    </div>
  );
}

export default PostPage;
