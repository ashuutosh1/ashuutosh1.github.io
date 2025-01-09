import React from "react";
import "../components/Aboutme.css";

export default function Aboutme() {
  return (
    <div className="flex flex-col gap-5 mt-40 max-md:mt-10">
      <span class="text-3xl font-semibold  max-md:ml-10">I am,</span>
      <span className="text-7xl max-md:text-8xl max-md:mx-10 font-semibold bg-gradient-to-r from-black via-purple-900 to-pink-400 bg-clip-text text-transparent">
        Ashutosh Kumar Singh
      </span>
      <span class="text-3xl max-md:text-4xl max-md:m-10 text-wrap">
        Web Developer, App developer and Marketing
      </span>
      <span>
        <button class="border px-4 py-2 max-md:px-8 max-md:py-4 max-md:ml-10  bg-black rounded-md text-white max-md:text-4xl hover:bg-gradient-to-r from-black via-purple-900 to-pink-400 ">
          View Resume
        </button>
      </span>
      <div class="flex text-3xl max-md:text-5xl gap-8 max-md:gap-14 max-md:mt-20 max-md:ml-20">
        <span className="links-me">
          <a href="#">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </span>
        <span className="links-me">
          <i class="fa-brands fa-github"></i>
        </span>
        <span className="links-me">
          <i class="fa-brands fa-twitter"></i>
        </span>

        <span className="links-me">
          <i class="fa-brands fa-github"></i>
        </span>
      </div>
    </div>
  );
}
