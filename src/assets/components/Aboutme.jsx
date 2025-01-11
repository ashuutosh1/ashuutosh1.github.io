import React from "react";
import "../components/Aboutme.css";
import Luffy from "../images/luffy1.jpeg";

export default function Aboutme() {
  return (
    <div className="flex max-lg:flex-col-reverse gap-5 max-md:gap-2 mt-40 max-md:mt-8">
      <div className="flex flex-col gap-5">
        <span class="text-2xl font-semibold max-md:mx-8">Hello, I am</span>
        <span className="text-5xl text-wrap pb-2 max-md:text-4xl max-md:mx-8 font-semibold bg-gradient-to-r from-black via-purple-900 to-purple-400 bg-clip-text text-transparent">
          Ashutosh Kumar Singh
        </span>
        <span class="text-base max-md:text-base max-md:mx-8 text-wrap">
          <i class="fa-solid fa-star"></i> Full Stack Software / Application
          Developer
        </span>
        <span class="text-base max-md:text-base max-md:mx-8 text-wrap">
          <i class="fa-solid fa-graduation-cap"></i>Student at Chandigarh
          University
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
        <div class="flex flex-col gap-5">
          <span className="text-lg font-bold underline max-md:ml-8">
            Connect with me 😊:
          </span>
          <div className="text-2xl max-md:text-xl gap-8 max-md:gap-8 flex  max-md:mb-10 max-md:ml-8">
            <span className="links-me">
              <a href="mailto:bro4code@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </span>
            <span className="links-me">
              <a href="https://www.github.com/ashuutosh1">
                <i class="fa-brands fa-github"></i>
              </a>
            </span>
            <span className="links-me">
              <a href="https://www.x.com/ashutos_h1">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </span>

            <span className="links-me">
              <a href="https://www.linkedin.com/in/ashuutosh1">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-10 border rounded-full object-cover">
        <img
          src={Luffy}
          alt="dsfd"
          className="max-w-48 max-lg:max-w-24 max-h-80 max-lg:max-h-40 border rounded-full object-cover"
        />
      </div>
    </div>
  );
}
