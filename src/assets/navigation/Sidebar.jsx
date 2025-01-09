import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navigation/Sidebar.css";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className=" flex sidebar-box list-none text-2xl ml-40 max-md:ml-2 mt-40">
      <ul className="flex flex-col max-md:flex-row gap-10 list-none text-2xl font-medium flex-wrap">
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={`list-side px-4 py-2 border border-black rounded-xl ${
              activeLink === "/"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            <i className="fa-solid fa-user"></i> ../ About me
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            onClick={() => handleLinkClick("/skills")}
            className={`list-side px-4 py-2 border border-black rounded-xl ${
              activeLink === "/skills"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            <i className="fa-solid fa-terminal"></i> ../ Skills
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            onClick={() => handleLinkClick("/projects")}
            className={`list-side px-4 py-2 border border-black rounded-xl ${
              activeLink === "/projects"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            <i className="fa-solid fa-diagram-project"></i> ../ Projects
          </Link>
        </li>
        <li>
          <Link
            to="/timeline"
            onClick={() => handleLinkClick("/timeline")}
            className={`list-side px-4 py-2 border border-black rounded-xl ${
              activeLink === "/timeline"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            <i className="fa-solid fa-sitemap"></i> ../ Timeline
          </Link>
        </li>
        <li>
          <Link
            to="/achievements"
            onClick={() => handleLinkClick("/achievements")}
            className={`list-side px-4 py-2 border border-black rounded-xl ${
              activeLink === "/achievements"
                ? "bg-black text-white"
                : "hover:bg-black hover:text-white"
            }`}
          >
            <i className="fa-solid fa-sitemap"></i> ../ Achievement
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
