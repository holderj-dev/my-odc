import React, { useState } from "react";

export default function AuthorCard({isActive, setISActive}) {

  function handleActive(e) {
    e.preventDefault();

    setISActive({
      active: true,
      name: e.target.id
    });
  }


  return (
    <>
      {/* <!-- Work --> */}
      <div id="intro" class="bg-[#
            cad2c5] h-auto my-6 py-8 rounded-lg border-4">
        <div id="avatar" class="flex justify-center py-2">
          <img class=" border p-2 rounded-lg border-[#52796f] bg-[#cad2c5] w-40 rounded-full" src="https://scontent.fmlw2-1.fna.fbcdn.net/v/t39.30808-6/309445590_177004951566542_4237086711968157105_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHdUeaNbdu7k_dmrHYlogYYZkLy5gmc7edmQvLmCZzt5xh793xSEWu4yXCdBIIxSmC3kVGe-5RjJysRqqAHfEtw&_nc_ohc=7YnN9kl3nvcAX9ussUQ&_nc_zt=23&_nc_ht=scontent.fmlw2-1.fna&oh=00_AfBjM15O7WLMvC5QGOe2-3fqMvlFI93Wo2LG8fkQ8E3w7w&oe=637ECC67" alt="JB image" />
        </div>
        <div id="content" class="prose lg:prose-xl px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">James Esil. Holder</h1>
          <small class="text-center block text-md text-gray-800"> Gamer, Game Developer &amp; AI Engineer</small>
          <small class="text-center block text-md text-gray-800"> ☎️ +231770172212 &amp; 📧 holderholderjamese@outlook.com </small>
          <p class="text-center block text-md text-gray-800"><i>Hey! There, itz your developer James, I love Games and I also like to make games, If you dont believe me ask William T. Johnson .Jr, He Can </i></p>

          <div id="hero-nav" className="p-6 w-full mx-auto">

            <ul className="flex items-center justify-center mx-4 gap-4">
              <li className=" border p-2 rounded-lg border-[#dad7cd] bg-[#dad7cd]">
                <a href="#education" id="education" onClick={handleActive} className={`${isActive.active && isActive.name === "education" && 'font-bold'} font-lato text-xl`}>Education</a>
              </li>

              <li className=" border p-2 rounded-lg border-[#dad7cd] bg-[#dad7cd]">
                <a href="#work" id="work" onClick={handleActive} className={`${isActive.active && isActive.name === "work" && 'font-bold'}  font-lato text-xl`}>Work</a>
              </li>

              <li className=" border p-2 rounded-lg border-[#dad7cd] bg-[#dad7cd]">
                <a href="#hobbies" id="hobbies" onClick={handleActive} className={`${isActive.active && isActive.name === "hobbies" && 'font-bold'}  font-lato text-xl`}>Hobbies</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>

  );
}