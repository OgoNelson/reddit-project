import React, { useState, createContext } from "react";
import commentData from "../comment/commentData";
import PageData from "../post/PageData";

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  // Initializing state with imported PageData
  const [pagepostData, setpagePostData] = useState(PageData);
  // for post likes
  const [postLike, setPostLike] = useState();
  // for comenets
  const [comment, setComment] = useState(commentData);

  return (
    <GlobalContext.Provider
      value={{ pagepostData, setpagePostData, postLike, setPostLike, comment }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
