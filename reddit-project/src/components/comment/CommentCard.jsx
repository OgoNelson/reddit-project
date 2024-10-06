import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../utilities/GlobalContext";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";
import commentData from "./commentData";
import { usersData } from "./commentData";

function CommentCard() {
  const [isProfilePicture, setIsProfilePicture] = useState(false);
  const { pagepostData, comment } = useContext(GlobalContext);
  const params = useParams();

  // Find the post with the matching ID
  const findPost = pagepostData.find((post) => post.id == params.id);

  // Find the comments for the matching post ID
  const postComments = comment.filter((el) => el.postId == findPost?.id);

  const relatedComments = usersData.filter(
    (comment) => comment.id == params.id
  );

  const handleProfilePicture = () => {
    setIsProfilePicture(true);
  };
  const handleProfilePictureClose = () => {
    setIsProfilePicture(false);
  };

  return (
    <div>
      <div className="w-[98%] m-auto bg-slate-50 border-[2px] p-2 sm:w-[50vw]">
        {postComments.length > 0 ? (
          postComments.map((commentItem) => {
            const userDetails = usersData.find(
              (el) => el.id === commentItem.userId
            );
            return (
              <div key={commentItem.id} className="mb-4 pb-4 border-b-2">
                <div className="flex items-center gap-2 justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="rounded-[100%] flex items-center justify-center border h-[30px] w-[30px]">
                      <img
                        onClick={handleProfilePicture}
                        src={userDetails.image}
                        alt="profilePicture"
                        className=" object-fit h-[30px] w-[30px] rounded-full"
                      />
                    </div>
                    <p className="text-[13px] font-medium ">
                      {userDetails.userName}
                    </p>
                  </div>
                  <p className="text-[13px] font-medium">{commentItem.time}</p>
                </div>
                <p className="p-2">{commentItem.body}</p>

                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-medium">
                    <span className="font-bold text-blue-500">
                      {commentItem.like} <ThumbUpIcon />
                    </span>
                  </p>

                  <Button variant="contained" color="info">
                    Like
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
      {/* for profile */}
      {isProfilePicture && (
        <div className="fixed bg-[rgba(0,0,0,0.3)] h-[100vh] w-[100vw] top-0 left-0 z-50 flex items-center justify-center transition-all ">
          <div className="h-[40vh] w-[40vw] bg-blue-400 shadow-lg transition-opacity">
            {relatedComments.map((el) => {
              return (
                <div className="flex items-center gap-4 p-2">
                  <div>
                    <img
                      className="h-[200px] w-[200px] rounded-[100%]"
                      src={el.image}
                    />
                  </div>
                  <div className="flex flex-col gap-2  ">
                    <p>UserName: {el.userName}</p>
                    <p>Nationality: Nigeria</p>
                    <p>Age: 50 years old</p>
                    <p>Birthday: 18th December 1998</p>
                  </div>
                  <Button
                    variant="text"
                    color="warning"
                    onClick={handleProfilePictureClose}
                  >
                    close
                  </Button>
                  ;
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CommentCard;
