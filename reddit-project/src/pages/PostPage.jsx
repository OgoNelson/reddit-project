import React from "react";
import PostCard from "../components/post/PostCard";
import Navbar from "../components/navbar/Navbar";

function PostPage() {
  return (
    <div>
      <div className="sticky top-0">
        <Navbar />
      </div>

      <div>
        <PostCard />
      </div>
    </div>
  );
}

export default PostPage;
