import React from "react";
import { HomePage, HandleError } from "./pages";
import Testin from "./components/navbar/Testin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeWrapper from "./theme/ThemeWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <HandleError />,
    children: [
      {
        index: true,
        element: <Testin />,
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
