import React, { useState } from "react";

export default function AuthorCard() {
  const [isActive, setISActive] = useState({
    active: true,
    name: 'education'
  });

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
            3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
        <div id="avatar" class="flex justify-center py-2">
          <img class=" border p-2 rounded-lg border-[#B2B2B2] bg-[#EB6440] w-40 rounded-full" src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/315554551_187322407201463_614938498642838127_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeF1X6-ds7fDvPQ6NXcHRVWI21siLbkoMCrbWyItuSgwKpVw5kUv4YPCcj4her_gG8hVvFykDlN-heLSyP7rjSiJ&_nc_ohc=meA-_D7Jj2UAX9avYsL&_nc_ht=scontent-lhr8-1.xx&oh=00_AfBudopW-0Ygf5W_N3UMN8nt5ThNl_5GfygTAMWwz6Ztww&oe=6379F55B" alt="JB image" />
        </div>
        <div id="content" class="prose lg:prose-xl px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">James Esil. Holder</h1>
          <small class="text-center block text-md text-gray-800"> Gamer, Game Developer &amp; AI Engineer</small>
          <small class="text-center block text-md text-gray-800"> ☎️ +231770172212 &amp; 📧 holderholderjamese@outlook.com </small>
          <p class="text-center block text-md text-gray-800"><i>Hey! There, itz your developer James, I love Games and I also like to make games, If you dont believe me ask William T. Johnson .Jr, He Can </i></p>

          <div id="hero-nav" className="p-6 w-full mx-auto">

            <ul className="flex items-center justify-center mx-4 gap-4">
              <li className=" border p-2 rounded-lg border-[#B2B2B2] bg-[#EB6440]">
                <a href="#education" id="education" onClick={handleActive} className={`${isActive.active && isActive.name === "education" && 'font-bold'} font-lato text-xl`}>Education</a>
              </li>

              <li className=" border p-2 rounded-lg border-[#B2B2B2] bg-[#EB6440]">
                <a href="#work" id="work" onClick={handleActive} className={`${isActive.active && isActive.name === "work" && 'font-bold'}  font-lato text-xl`}>Work</a>
              </li>

              <li className=" border p-2 rounded-lg border-[#B2B2B2] bg-[#EB6440]">
                <a href="#hobbies" id="hobbies" onClick={handleActive} className={`${isActive.active && isActive.name === "hobbies" && 'font-bold'}  font-lato text-xl`}>Hobbies</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>

  );
}