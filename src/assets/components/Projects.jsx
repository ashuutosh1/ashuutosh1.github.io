import React from "react";

export default function Projects() {
  return (
    <div class=" p-4 mt-20 max-md:mt-5 ml-28 max-lg:ml-0">
      <div className="max-w-2xl p-16 max-md:p-8 pr-10 max-md:pr-5 mx-auto  dark:text-gray-600">
        <h2 className="text-2xl font-bold md:text-4xl pb-10">Projects</h2>
        <ul className="space-y-12">
          {/* the third project */}
          <li className="flex items-start space-x-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center h-8 text-sm hover:underline"
            >
              v4.0.0
            </a>
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
                      Github
                    </span>
                  </a>
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
                      Website
                    </span>
                  </a>
                </div>

                <span className="text-xs whitespace-nowrap">January, 2025</span>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">EcoRide</span>
                <p className="text-purple-600 font-semibold">
                  TechStack: HTML, CSS, JavaScript and Firebase
                </p>
                <p>
                  An anonymous file-sharing platform allows users to securely
                  share files without revealing their identity. It ensures
                  privacy through end-to-end encryption and does not require
                  user registration or personal information.
                </p>
              </div>
            </div>
          </li>

          {/* the third project */}
          <li className="flex items-start space-x-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center h-8 text-sm hover:underline"
            >
              v3.0.0
            </a>
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
                      Github
                    </span>
                  </a>
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
                      Website
                    </span>
                  </a>
                </div>

                <span className="text-xs whitespace-nowrap">May, 2024</span>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  {" "}
                  StreamLABEL - The online video view platform
                </span>
                <p className="text-purple-600 font-semibold">
                  TechStack: ReactJS, Tailwind CSS, Express JS, MongoDB
                </p>
                <p>
                  StreamLABEL is an online video view platform designed to
                  provide seamless video streaming and user engagement
                  experiences.
                </p>
                <p>
                  The robust tech stack ensures scalability, fast performance,
                  and a user-friendly interface, making StreamLABEL an ideal
                  solution for modern video streaming needs.
                </p>
              </div>
            </div>
          </li>

          {/* the second project */}
          <li className="flex items-start space-x-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center h-8 text-sm hover:underline"
            >
              v2.0.0
            </a>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-600">
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
                    Github
                  </span>
                </a>
                <span className="text-xs whitespace-nowrap">
                  December, 2023
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  TaskGo : A simple site to manage your task
                </span>
                <p className="text-purple-600 font-semibold">
                  TechStack: React JS, Tailwind CSS, React Hooks
                </p>
                <p>
                  TaskGo is a sleek and intuitive site designed to help users
                  efficiently manage their tasks. Built with ReactJS, it
                  provides a dynamic and interactive interface, while React
                  Hooks enable seamless state management for features like task
                  creation, editing, and completion tracking.
                </p>
              </div>
            </div>
          </li>

          {/* the first project */}
          <li className="flex items-start space-x-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center h-8 text-sm hover:underline"
            >
              v1.0.0
            </a>
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between space-x-4 dark:text-gray-600">
                <div className="flex gap-5 max-md:gap-2">
                  <a
                    rel="noopener noreferrer"
                    href="https://github.com/ashuutosh1/fileshare.github.io"
                    className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full dark:bg-violet-600"
                    ></span>
                    <span className="group-hover:underline dark:text-gray-600">
                      Github
                    </span>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://fileshare-phi.vercel.app/"
                    className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full dark:bg-violet-600"
                    ></span>
                    <span className="group-hover:underline dark:text-gray-600">
                      Website
                    </span>
                  </a>
                </div>

                <span className="text-xs whitespace-nowrap">June, 2023</span>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  Anynomous File Sharing Platform
                </span>
                <p className="text-purple-600 font-semibold">
                  TechStack: HTML, CSS, JavaScript and Firebase
                </p>
                <p>
                  An anonymous file-sharing platform allows users to securely
                  share files without revealing their identity. It ensures
                  privacy through end-to-end encryption and does not require
                  user registration or personal information.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
