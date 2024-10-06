import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../utilities/GlobalContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import commentData from "./commentData";
import {
  Avatar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CommentCard from "./CommentCard";

function Comment() {
  const { pagepostData } = useContext(GlobalContext);
  const params = useParams();

  // Find the post with the matching ID
  const findPost = pagepostData.find((post) => post.id == params.id);

  return (
    <div>
      <div className="p-[10px] h-[85vh] flex items-center flex-col justify-center md:p-[3vh]">
        <div className="sticky top-0 bg-stone-100">
          <div className="flex items-center gap-2 mb-3">
            <div>
              <KeyboardArrowUpIcon />
              <p>{findPost.postLike}</p>
              <KeyboardArrowDownIcon />
            </div>
            <div className="flex items-start flex-col gap-1">
              <p>{findPost.post}</p>
              <p className="text-[12px]">
                {findPost.time}
                <span className="text-blue-400">
                  <i> {findPost.name}</i>
                </span>
              </p>
              <Avatar sx={{ width: "30px", height: "30px" }}>
                <ShareIcon sx={{ opacity: "0.5", width: "14px" }} />
              </Avatar>
            </div>
          </div>

          <img
            className="h-[300px] w-[300px] object-fit ml-[10px] sm:ml-[50px]"
            src={findPost.image}
            alt="Post"
          />
          <div className="mb-2 flex items-center justify-between w-[50vw]">
            <div className="flex gap-2 items-center">
              <p>{findPost.postComment}</p>
              <p>Comments</p>
            </div>
            <div className="flex">
              <div>
                <List>
                  <ListItem>
                    <ListItemButton sx={{ background: "white" }}>
                      <ListItemText
                        primary={
                          <Typography sx={{ fontSize: "12px" }}>
                            Filtered By
                            <span className="text-blue-400"> Best</span>
                          </Typography>
                        }
                      />
                      <ListItemIcon>
                        <ArrowDropDownIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
              <div>
                <List>
                  <ListItem>
                    <ListItemButton sx={{ background: "white" }}>
                      <ListItemText
                        primary={
                          <Typography sx={{ fontSize: "12px" }}>
                            Showing Top
                            <span className="text-blue-400"> 200</span>
                          </Typography>
                        }
                      />
                      <ListItemIcon>
                        <ArrowDropDownIcon />
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </div>

        {/* Display Comments */}
        <CommentCard />
      </div>
    </div>
  );
}

export default Comment;
