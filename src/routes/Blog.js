import React, { useState } from "react";
import Navbar from "../conponents/Navbar";


export function Blogs() {
    // const [reaction, setReaction] = (false)


    // function handleReaction(){

    // }

    // Adding Likes
    const [likes, setLikes] = useState(0)
    
    const incLikes = () => {
        setLikes(likes + 1);
    }

    // Adding Hearts

    const [hearts, setHearts] = useState(0)
    
    const incHearts = () => {
        setHearts(hearts + 1);
    }


    const [hates, setHates] = useState(0)
    
    const incHates = () => {
        setHates(hates + 1);
    }


    return (

        <>
            <Navbar />

            <div class=" overflow-hidden justify-items-center grid-rows-4  pb-8 mx-auto gap-4 w-25">
                <ul className="flex items-center justify-center mx-4 gap-4">
                    <li className=" border p-2 rounded-lg border-[#B2B2B2] ">
                        <div>
                            <img class="w-full" src="https://i.ytimg.com/vi/TE-SsP3pigs/maxresdefault.jpg" alt="Forest" />
                            <div>
                                <div class="font-bold text-xl mb-2">Sol</div>
                                <p class="text-gray-700 text-base">Fully Made In Ue4.</p>
                            </div>
                            <div class="flex justify-center ">
                                <tr>
                                    <th class='px-4 py-4 '>
                                        <button onClick={incLikes}>
                                            <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-bounce border rounded-full ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                                
                                            </svg>
                                            <p>{likes}</p>
                                            </div>

                                        </button>

                                    </th>
                                </tr>

                                <tr>
                                    <th class='px-4 py-4 '>
                                        <button onClick={incHearts}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-bounce border rounded-full">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                        <p>{hearts}</p>
                                        </button>


                                    </th>
                                </tr>

                                <tr>
                                    <th class=' px-4 py-4'>
                                        <button onClick={incHates}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 animate-bounce border rounded-full">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                                        </svg>
                                        <p>{hates}</p>
                                        </button>

                                    </th>
                                </tr>


                            </div>
                        </div>
                    </li>
                </ul>
            </div>



        </>
    );
}