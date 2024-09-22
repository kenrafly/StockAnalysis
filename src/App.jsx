import React from "react";
import Navbar from "./Components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Homapage from "./pages/Homapage";
import Analyze from "./pages/Analyze";
import { Contact } from "./pages/Contact";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Homapage />,
      },
      {
        path: "analyze",
        element: <Analyze />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={route} />;
};

export default App;
