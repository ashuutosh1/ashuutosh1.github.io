import React from "react";
import WebDone from "../images/webdevdone.jpg";

export default function Certificate() {
  return (
    <div class=" p-4 mt-20 max-md:mt-5 ml-28 max-lg:ml-0">
      <div className="max-w-2xl p-16 max-md:p-8 pr-10 max-md:pr-5 mx-auto  dark:text-gray-600">
        <h2 className="text-2xl font-bold md:text-4xl pb-10">Certificates</h2>
        <ul className="space-y-12">
          {/* the third project */}
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
                <img src={WebDone} alt="vfv" className="max-w-72" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
