import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navigation/Sidebar.css";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="flex sidebar-box list-none ml-40 max-lg:ml-20 max-md:ml-5 mt-40 max-md:mt-10">
      <ul className="flex flex-col max-md:flex-row gap-10 max-lg:gap-5 list-none text-lg max-lg:text-sm font-medium flex-wrap">
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            className={`list-side px-4 py-2 border rounded-xl ${
              activeLink === "/"
                ? "border-purple-400 text-white"
                : " text-white"
            }`}
          >
            <i className="fa-solid fa-user"></i> ../ About me
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            onClick={() => handleLinkClick("/projects")}
            className={`list-side px-4 py-2 border rounded-xl ${
              activeLink === "/projects"
                ? "border-purple-400 text-white"
                : " text-white"
            }`}
          >
            <i className="fa-solid fa-diagram-project"></i> ../ Projects
          </Link>
        </li>

        <li>
          <Link
            to="/certificate"
            onClick={() => handleLinkClick("/certificate")}
            className={`list-side px-4 py-2 border rounded-xl ${
              activeLink === "/certificate"
                ? "border-purple-400 text-white"
                : " text-white"
            }`}
          >
            <i class="fa-solid fa-certificate"></i> ../ Certificate
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
