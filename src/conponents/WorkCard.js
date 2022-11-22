import React from "react";

export default function WorkCard() {
  return (
    <>
      <div id="work" class="bg-[#cad2c5] h-auto my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-25   border p-2 rounded-lg border-[#B2B2B2] bg-[#dad7cd]">Work 👨‍⚖️</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Proinfo Games TM</summary>
          <p>Founder And CEO, Since 2019.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Proinfo Gaming</summary>
          <p>Senior Gamer.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Proinfo Gaming Center</summary>
          <p>Manager In Charge.</p>
        </details>

      </div>
    </>

  );
}