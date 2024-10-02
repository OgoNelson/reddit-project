import React from "react";
import { HomePage, HandleError } from "./pages";
import Testin from "./components/navbar/Testin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  return <RouterProvider router={router} />;
}

export default App;
