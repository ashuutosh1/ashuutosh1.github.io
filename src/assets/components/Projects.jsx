import React from "react";

export default function Projects() {
  return (
    <div class=" p-4 mt-20 max-md:mt-5 ml-28 max-lg:ml-0">
      <div className="max-w-xl p-16 max-md:p-8 pr-10 max-md:pr-5 mx-auto  dark:text-gray-800">
        <h2 className="text-2xl font-bold md:text-4xl pb-10">Projects</h2>
        <ul className="space-y-12">
          <li className="flex items-start space-x-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center h-8 text-sm hover:underline"
            >
              v3.2.0
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
                  <span className="group-hover:underline dark:text-gray-800">
                    Github
                  </span>
                </a>
                <span className="text-xs whitespace-nowrap">10h ago</span>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt nunc ipsum tempor purus vitae id. Morbi in
                  vestibulum nec varius. Et diam cursus quis sed purus nam.
                  Scelerisque amet elit non sit ut tincidunt condimentum. Nisl
                  ultrices eu venenatis diam.
                </p>
              </div>
            </div>
          </li>
          <li className="flex items-start space-x-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center h-8 text-sm hover:underline"
            >
              v3.1.9
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
                  <span className="group-hover:underline dark:text-gray-800">
                    Github
                  </span>
                </a>
                <span className="text-xs whitespace-nowrap">2 weeks ago</span>
              </div>
              <div className="space-y-2">
                <p>
                  Scelerisque amet elit non sit ut tincidunt condimentum. Nisi
                  ultrices eu venenatis diam.
                </p>
                <p>
                  Illum quaerat ab inventore, eveniet repudiandae saepe, iste
                  sed molestias laborum atque, quos reprehenderit fugit cumo!
                </p>
              </div>
            </div>
          </li>
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
                    href="#"
                    className="inline-flex items-center px-3 py-1 my-1 space-x-2 text-sm border rounded-full group dark:border-gray-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full dark:bg-violet-600"
                    ></span>
                    <span className="group-hover:underline dark:text-gray-800">
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
                    <span className="group-hover:underline dark:text-gray-800">
                      Website
                    </span>
                  </a>
                </div>

                <span className="text-xs whitespace-nowrap">2 years ago</span>
              </div>
              <div className="space-y-2">
                <span className="text-lg font-semibold underline">
                  Anynomous File Sharing Platform
                </span>
                <p>TechStack: HTML, CSS, JavaScript and Firebase</p>
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
