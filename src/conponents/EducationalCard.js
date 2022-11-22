import React from "react";

export default function EducationalCard(){
    return(
        <>
         <div id="education" class="bg-[#cad2c5] h-50 my-6 py-8 rounded-lg border-4">
                  <div class="flex justify-center">
                <h3 class="border-4 w-25   border p-2 rounded-lg border-[#B2B2B2] bg-[#dad7cd]">Education 🎓</h3>
              </div>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">High School 🎓</summary>
                <p>Graduation From Victory Chaple High School, 2020-2021.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">University 🎓/ Collage 🎓</summary>
                <p>Some Courses At African, American University College.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Others</summary>
                <p>Studied (ReactJs & JavaScript Front-End Wed-Developnment, At Orange Digital Center (ODC)).</p>
              </details>
         </div>
        </>

    );
}