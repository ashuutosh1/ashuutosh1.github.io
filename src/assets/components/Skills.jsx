import React from "react";

export default function Skills() {
  return (
    <div class=" p-4 mt-36 max-md:mt-5">
      <div class="container">
        <div class="flex flex-col md:grid grid-cols-12 text-gray-50">
          <div class="flex md:contents">
            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-purple-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple-500 shadow text-center">
                <i class="fas fa-check-circle text-white"></i>
              </div>
            </div>
            <div class="bg-purple-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 class="font-semibold text-lg mb-1">Languages</h3>
              <p class="leading-tight  text-justify w-full">
                C, C++, Python, JavaScript/ TypeScript, Dart, SQL
              </p>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-black pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-black shadow text-center">
                <i class="fas fa-check-circle text-white"></i>
              </div>
            </div>
            <div class="bg-black col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 class="font-semibold text-lg  mb-1 ">Liberary/ Framework</h3>
              <p class="leading-tight text-justify">
                <i class="fa-brands fa-react ml-1 mr-1"></i> ReactJS,
                <i class="fa-brands fa-node-js ml-1 mr-1"></i> NodeJS, Express
                JS,
                <i class="fa-brands fa-css3-alt ml-1 mr-1"></i>Tailwind CSS
              </p>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-indigo-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-indigo-500 shadow text-center">
                <i class="fas fa-check-circle text-white"></i>
              </div>
            </div>
            <div class="bg-indigo-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 class="font-semibold text-lg mb-1 text-gray-50">Tools</h3>
              <p class="leading-tight  text-justify">
                Github, Firebase, Vercel,{" "}
                <i class="fa-brands fa-figma mr-1 ml-1"></i>Figma
              </p>
            </div>
          </div>

          <div class="flex md:contents">
            <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-500 shadow text-center">
                <i class="fas fa-exclamation-circle text-white"></i>
              </div>
            </div>
            <div class="bg-gray-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
              <h3 class="font-semibold text-lg  mb-1 text-white">
                Other Skills
              </h3>
              <p class="leading-tight  text-justify">
                UI/UX designer, Team Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
