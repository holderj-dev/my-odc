import React from "react";

export default function WorkCard(){
    return(
        <>
        <div id="work" class="bg-[#B2B2B2] h-auto my-6 py-8 rounded-lg border-4">
              <div class="flex justify-center">
                <h3 class="border-4 w-20  border-dashed px-4 py-4">Work</h3>
              </div>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Proinfo Games TM</summary>
                <p>Foun.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">EasyTech</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Epcot Center</summary>
                <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                  pavilions, award-winning fireworks and seasonal special events.</p>
              </details>

            </div>
        </>

    );
}