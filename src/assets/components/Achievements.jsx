import React from "react";
import Certi1 from "../images/certi1.png";
import Cisco1 from "../images/cisco1.png";
import Cisco2 from "../images/cisco2.png";
import Cisco3 from "../images/cisco3.png";

export default function Achievements() {
  return (
    <div class="p-4 mt-20 max-md:mt-5 ml-28 max-lg:ml-5">
      <div className="max-w-2xl p-16 max-md:p-8 pr-10 max-md:pr-5 mx-auto  dark:text-gray-800">
        <h2 className="text-2xl font-bold md:text-4xl pb-10">Achievement</h2>
        <ul className="space-y-12">
          <li className="flex items-start space-x-3">
            <span className="flex items-center h-8 text-sm hover:underline">
              v1.0.0
            </span>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-600">
                <div className="flex gap-5 max-md:gap-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full dark:bg-violet-600"
                    ></span>
                    <span className="group-hover:underline dark:text-gray-800">
                      See credentials <i class="fa-solid fa-fire"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  Web Developement Course -- Udemey
                </span>
                <p className="text-purple-600">
                  Topic learned: HTML, CSS, JavaScript, React JS, Node JS, Git,
                  GitHub, ExpressJs, Postgre SQL
                </p>
                {/* <p></p> */}

                <div className="">
                  <img
                    src={Certi1}
                    alt=""
                    className="max-h-60 w-auto border-2 border-black "
                  />
                </div>
              </div>
            </div>
          </li>

          <li className="flex items-start space-x-3">
            <span className="flex items-center h-8 text-sm hover:underline">
              v2.0.0
            </span>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-600">
                <div className="flex gap-5 max-md:gap-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full dark:bg-violet-600"
                    ></span>
                    <span className="group-hover:underline dark:text-gray-800">
                      See credentials <i class="fa-solid fa-fire"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  Blockchain Revolution -- Coursera
                </span>
                <p className="text-purple-600">
                  Topic learned: Solidity, Smart Contract, NFTs, DApps,
                  Transaction in blockchain
                </p>
                {/* <p></p> */}

                <div className="">
                  <img
                    src={Certi1}
                    alt=""
                    className="max-h-60 w-auto border-2 border-black "
                  />
                </div>
              </div>
            </div>
          </li>

          <li className="flex items-start space-x-3">
            <span className="flex items-center h-8 text-sm hover:underline">
              v3.0.0
            </span>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-600">
                <div className="flex gap-5 max-md:gap-2">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full dark:bg-violet-600"
                    ></span>
                    <span className="group-hover:underline dark:text-gray-800">
                      See credentials <i class="fa-solid fa-fire"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  Introduction to CyberSecurity and Packet Tracer, CyberSecurity
                  Essentials -- Cisco Networking Academy
                </span>
                <p className="text-purple-600">
                  Topic learned: CyberSecurity, Packet Tracer, Computer Network
                  -"DHCP, IP Address and more..."
                </p>
                <p>
                  I have completed this under the industrial tranning. This
                  Tranning/Course provided me with comprehensive knowledge and
                  practical skills in modern CyberSecurity.
                </p>
                <div className="flex max-w-96 overflow-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300 ">
                  <img
                    src={Cisco1}
                    alt=""
                    className="max-h-60 w-auto border-2 border-black "
                  />
                  <img
                    src={Cisco2}
                    alt=""
                    className="max-h-60 w-auto border-2 border-black "
                  />
                  <img
                    src={Cisco3}
                    alt=""
                    className="max-h-60 w-auto border-2 border-black "
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
