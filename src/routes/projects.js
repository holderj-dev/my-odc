import React from "react";
import Navbar from "../conponents/Navbar";


export function Projects(){
    return(
        <>
        <Navbar/>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {/* <!--Card 1--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://i.ytimg.com/vi/2KU8AWuAaHE/maxresdefault.jpg" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Survival Hunter</div>
        <p class="text-gray-700 text-base">
        Fully Made In Ue4.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    {/* <!--Card 2--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://cdn.corporatefinanceinstitute.com/assets/artificial-intelligence.jpeg" alt="AI"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Ai in Python</div>
        <p class="text-gray-700 text-base">
        Fully Made In python.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
      </div>
    </div>

    {/* <!--Card 3--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://image.winudf.com/v2/image1/Y29tLnByb2luZm9nYW1lcy52dHJfc2NyZWVuXzdfMTYzMDcxMTM2OF8wODg/screen-7.jpg?fakeurl=1&type=.webp" alt="Forest"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Vector Runner</div>
        <p class="text-gray-700 text-base">
        Fully Made In Ue4.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>

    {/* <!--Card 4--> */}
    <div class="rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://i.ytimg.com/vi/TE-SsP3pigs/maxresdefault.jpg" alt="Forest"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Sol</div>
        <p class="text-gray-700 text-base">
          Fully Made In Ue4.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
      </div>
    </div>
  </div>
        </>
    );
}