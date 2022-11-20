import React from "react";
import Navbar from "../conponents/Navbar";


export function Projects(){
    return(
        <>
        <Navbar/>
        <div id="Projects" class="bg-[#3EAEAEA] h-50 my-6 py-8 rounded-lg border-4 bg-[#ffddd2]">
                  <div class="flex justify-center">
                <h3 class="border-4 w-25   border p-2 rounded-lg border-[#B2B2B2] bg-[#EB6440]">PROJECTS </h3>
              </div>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Portfolio Page </summary>
                <a href='https://github.com/holderj-dev/portfolio-react'>View On Github.</a>
              </details>

         </div>
        </>
    );
}