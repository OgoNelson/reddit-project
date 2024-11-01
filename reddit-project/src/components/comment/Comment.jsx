import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../utilities/GlobalContext";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShareIcon from "@mui/icons-material/Share";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MessageIcon from "@mui/icons-material/Message";
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
  const [ischartClicked, setIsChartClicked] = useState(false);
  const params = useParams();

  const handlechartClicked = () => {
    setIsChartClicked(!ischartClicked);
  };

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
      <div
        onClick={handlechartClicked}
        className="fixed h-7 w-7 bg-blue-400 rounded-[100%] flex items-center justify-center right-8 p-6 bottom-5"
      >
        <MessageIcon sx={{ color: "white" }} />
      </div>
      {ischartClicked && (
        <div className="fixed  h-[40vh] w-[20vw] bottom-5  right-[6em] bg-white rounded-md">
          <div className="flex items-center justify-center">
            <img
              className="h-[50px] w-[50px] my-3 rounded-[100%]"
              src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728172800&semt=ais_hybrid"
            />
          </div>
          <p className="p-1 text-[10px] ml-1 bg-stone-100 w-fit mb-1">
            Hello! am Customer Support
          </p>
          <p className="p-1 text-[10px] ml-1 bg-stone-100 w-fit mb-1">??</p>
          <div className="flex justify-end flex-col items-end">
            <p className="p-1 text-[10px] mr-1 bg-stone-100 w-fit mb-1">
              Hello
            </p>
            <p className="p-1 text-[10px] mr-1 bg-stone-100 w-fit mb-1">
              i am hungry
            </p>
            <p className="p-1 text-[10px] mr-1 bg-stone-100 w-fit mb-1">
              i need Food
            </p>
          </div>
          <p className="p-1 text-[10px] ml-1 bg-stone-100 w-fit mb-1">
            Please contact us on 08142310543
          </p>
        </div>
      )}
    </div>
  );
}

export default Comment;
