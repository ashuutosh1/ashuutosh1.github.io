import React from "react";
import WebDone from "../images/webdevdone.jpg";
import Certi1 from "../images/certi1.png";
import Cisco1 from "../images/cisco1.png";
import Cisco2 from "../images/cisco2.png";
import Cisco3 from "../images/cisco3.png";

export default function Certificate() {
  return (
    <div class=" p-4 mt-20 max-md:mt-5 ml-28 max-lg:ml-0">
      <div className="max-w-2xl p-16 max-md:p-8 pr-10 max-md:pr-5 mx-auto  dark:text-gray-600">
        <h2 className="text-2xl font-bold md:text-4xl pb-10">Certificates</h2>
        <ul className="space-y-12">
          {/* 1st certificate */}
          <li className="flex items-start space-x-3">
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-500">
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
                    <span className="group-hover:underline dark:text-gray-600">
                      See Credietials
                    </span>
                  </a>
                </div>
                <span className="text-xs whitespace-nowrap">January, 2025</span>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  Web Development Bootcamp/Course -- Udemy
                </span>
                <p className="text-purple-600 font-semibold">
                  Topic Learned: HTML, CSS, JavaScript, Tailwind CSS, React JS,
                  NodeJS, Express JS, Rest API, Git, GitHub, Postgre SQL
                </p>
                <p>Course Duration: 62 hours</p>
                <div className="max-w-72">
                  <img src={WebDone} alt="vfv" className="max-w-72" />
                </div>
              </div>
            </div>
          </li>

          {/* 2nd cetificate */}
          <li className="flex items-start space-x-3">
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-500">
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
                    <span className="group-hover:underline dark:text-gray-600">
                      See Credietials
                    </span>
                  </a>
                </div>
                <span className="text-xs whitespace-nowrap">
                  September, 2024
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  Blockchain Revolution -- Coursera
                </span>
                <p className="text-purple-600 font-semibold">
                  Topic Learned: Blockchain, Smart Contract, DApps, Solidity,
                  Tokens, NFTs, Transaction in Blockchain and many more....
                </p>
                <p>Course provided by Chandigarh University</p>
                <div className="max-w-72">
                  <img src={Certi1} alt="vfv" className="max-w-72" />
                </div>
              </div>
            </div>
          </li>

          {/* 3rd cetificate */}
          <li className="flex items-start space-x-3">
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-500">
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
                    <span className="group-hover:underline dark:text-gray-600">
                      See Credietials
                    </span>
                  </a>
                </div>
                <span className="text-xs whitespace-nowrap">June, 2024</span>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  Introduction to CyberSecurity/Packet Tracer and CyberSecurity
                  Essentials -- Cisco NEtwork Academy
                </span>
                <p className="text-purple-600 font-semibold">
                  Topic Learned: CyberSecurity, Protocols, Computer Network,
                  Packet Tracer, Security and Preventation of Network
                </p>
                <p>Course provided by Chandigarh University</p>
                <div className="max-w-72 flex overflow-scroll">
                  <img src={Cisco1} alt="vfv" className="max-w-72" />
                  <img src={Cisco1} alt="vfv" className="max-w-72" />
                  <img src={Cisco1} alt="vfv" className="max-w-72" />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
