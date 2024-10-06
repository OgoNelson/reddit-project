import React from "react";
import { HomePage, HandleError, PostPage } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeWrapper from "./theme/ThemeWrapper";
import CommentPage from "./pages/CommentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HandleError />,
    children: [
      {
        index: true,
        element: <PostPage />,
      },
      {
        path: "comment/:id",
        element: <CommentPage />, // Render a specific comment based on ID
      },
    ],
  },
]);

function App() {
  return (
    <ThemeWrapper>
      <RouterProvider router={router} />
    </ThemeWrapper>
  );
}

export default App;
