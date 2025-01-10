import React from "react";
import "../components/Aboutme.css";
import Luffy from "../images/luffy1.jpeg";

export default function Aboutme() {
  return (
    <div className="flex max-lg:flex-col-reverse gap-5 max-md:gap-2 mt-40 max-md:mt-8">
      <div className="flex flex-col gap-5">
        <span class="text-2xl font-semibold max-md:mx-8">I am,</span>
        <span className="text-5xl text-wrap pb-2 max-md:text-4xl max-md:mx-8 font-semibold bg-gradient-to-r from-black via-purple-900 to-pink-400 bg-clip-text text-transparent">
          Ashutosh Kumar Singh
        </span>
        <span class="text-base max-md:text-base max-md:mx-8 text-wrap">
          <i class="fa-solid fa-star"></i> Web Developer, App developer and
          Marketing
        </span>
        <span class="text-base max-md:text-base max-md:mx-8 text-wrap">
          <i class="fa-solid fa-star"></i>Traniee at the
          <ol className="px-8">
            <li> ../ Cisco CyberSecurity </li>
            <li> ../ MetaCrafter</li>
          </ol>
        </span>
        <span>
          <button class="border px-4 py-2 max-md:px-2 max-md:py-2 max-md:ml-5  bg-black rounded-md text-white max-md:text-base hover:bg-gradient-to-r from-black via-purple-900 to-pink-400 ">
            View Resume
          </button>
        </span>
        <div class="flex text-2xl max-md:text-xl gap-8 max-md:gap-8 max-md:mt-5 max-md:mb-10 max-md:ml-8">
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
            <i class="fa-brands fa-linkedin"></i>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mb-10 border rounded-full object-cover">
        <img
          src={Luffy}
          alt="dsfd"
          className="max-w-48 max-md:min-w-72 max-h-80 border rounded-full object-cover"
        />
      </div>
    </div>
  );
}
