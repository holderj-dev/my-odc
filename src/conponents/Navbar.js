import React from "react";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <>
      <div id="navbar">
       <nav class="bg-[#a3b18a] shadow">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 justify-between">
              <div class="absolute inset-y-0 left-0 flex items-center bg-[#52796f] sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button type="button" class="
                    inline-flex
                    items-center
                    justify-center
                    rounded-md
                    p-2
                    text-gray-400
                    hover:bg-gray-100 hover:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-indigo-500
                  " aria-controls="mobile-menu" aria-expanded="false">
                  <span class="sr-only">Open main menu</span>
                  {/* <!--
                Icon when menu is closed.
    
                Heroicon name: outline/bars-3
    
                Menu open: "hidden", Menu closed: "block"
              --> */}
                  <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                  {/* <!--
                Icon when menu is open.
    
                Heroicon name: outline/x-mark
    
                Menu open: "block", Menu closed: "hidden"
              --> */}
                  <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div class="
                  flex flex-1
                  items-center
                  justify-center
                  sm:items-stretch sm:justify-start
                ">
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                  <a href="/" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">James Esil Holder</a>
                    <a href="projects" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">projects</a>
                  <a href="blog" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Blog</a>
                  <a href="contacts" class="
                      inline-flex
                      items-center
                      border-b-2 border-transparent
                      px-1
                      pt-1
                      text-sm
                      font-medium
                      text-gray-500
                      hover:border-gray-300 hover:text-gray-700
                    ">Contact</a>
                </div>
              </div>
              <div class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pr-2
                  sm:static sm:inset-auto sm:ml-6 sm:pr-0
                "></div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}

          <div class="sm:hidden" id="mobile-menu">
            <div class="space-y-1 pt-2 pb-4">

              {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" --> */}
             
              <a href="/projects" class="
                  block
                  border-l-4 border-indigo-500
                  bg-indigo-50
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-indigo-700
                ">Projects</a>
              <a href="#" class="
                  block
                  border-l-4 border-transparent
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-gray-500
                  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                ">Blog</a>
              <a href="#" class="
                  block
                  border-l-4 border-transparent
                  py-2
                  pl-3
                  pr-4
                  text-base
                  font-medium
                  text-gray-500
                  hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700
                ">Contact</a>
            </div>
          </div>
        </nav>

        {/* <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            
           
            <AuthorCard/>

            <WorkCard/>
            
            <EducationalCard/>
            
            <HobbiesCard/>
          
          </div>
       
        </main>
        </div> */}
      </div>
    </>
  );
}