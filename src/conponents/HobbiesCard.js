import React from "react";

export default function HobbiesCard(){
    return(
        <>
          <div id="hobbie" class="bg-[#B2B2B2] h-50 my-6 py-8 rounded-lg border-4">
          <details class="px-6 py-4">
          <img class="w-40" src="" alt="JB image" />
                <summary class="font-bold text-2xl text-gray-800">Game Developnment 💻, And Gaming 🎮</summary>
                <p>I love gaming and game making you can check out some of my Gaming And Game Dev.. videos on youtube and Facebook below</p>
                
                <a class="font-bold text-2xl text-green-800" href='https://www.youtube.com/@proinfogames'>Watch Here Youtube | </a>
                <a class="font-bold text-2xl text-green-800" href='https://www.facebook.com/ProinfoGames6000'>Watch Here Facebook</a>
              </details>

              <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Live Stream 🎦</summary>
                <p>Watch my Live Gaming Videos on Facebook Here.</p>
                <a class="font-bold text-2xl text-green-800" href='https://www.facebook.com/Jaye6000'>Watch Here Facebook</a>
              </details>
          </div>
        
        </>

    );
}