import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutme from "./assets/components/Aboutme";
import Projects from "./assets/components/Projects";
import Skills from "./assets/components/Skills";
import Timeline from "./assets/components/Timeline";
import Achievements from "./assets/components/Achievements";
import Sidebar from "./assets/navigation/Sidebar";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="dashboard-box max-md:flex-col gap-40 max-lg:gap-12">
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
  {
    path: "/skills",
    element: (
      <div className="dashboard-box max-md:flex-col ">
        <Sidebar />
        <Skills />
      </div>
    ),
  },
  {
    path: "/timeline",
    element: (
      <div className="dashboard-box max-md:flex-col">
        <Sidebar />
        <Timeline />
      </div>
    ),
  },
  {
    path: "/achievements",
    element: (
      <div className="dashboard-box max-md:flex-col ">
        <Sidebar />
        <Achievements />
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
