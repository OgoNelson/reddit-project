import React from "react";
import Comment from "../components/comment/Comment";
import CommentNav from "../components/comment/CommentNav";

function CommentPage() {
  return (
    <div className="bg-stone-100 relative h-[100vh]">
      <div className="shadow-lg sticky z-10 top-0 bg-blue-400  h-[8vh] p-4 ">
        <CommentNav />
      </div>
      <div className="h-[92vh] mt-[20vh] sm:mt-[5vh]  ">
        <Comment />
      </div>
    </div>
  );
}

export default CommentPage;
