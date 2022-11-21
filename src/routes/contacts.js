import React from "react";
import Navbar from "../conponents/Navbar";


export function Contacts(){
    return(
        <>
        <Navbar/>
        
        <div>
      <tr class="odd:bg-white even:bg-slate-50">
        <td>name</td>
        <td>title</td>
        <td>email</td>
      </tr>
        <details class="px-6 py-4">
                <summary class="font-bold text-2xl text-gray-800">Contacts</summary>
                <a href='https://github.com/holderj-dev/portfolio-react'>View On Github.</a>
              </details>
        </div>
        </>
    );
}