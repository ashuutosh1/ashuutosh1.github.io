import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutme from "./assets/components/Aboutme";
import Projects from "./assets/components/Projects";
import Sidebar from "./assets/navigation/Sidebar";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="dashboard-box max-md:flex-col gap-32 max-lg:gap-12">
        <Sidebar />
        <Aboutme />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div className="dashboard-box max-md:flex-col ">
        <Sidebar />
        <Projects />
      </div>
    ),
  },
]);

export default function App() {
  return (
    <body>
      <div class="flex">
        <RouterProvider router={router} />
      </div>
    </body>
  );
}
