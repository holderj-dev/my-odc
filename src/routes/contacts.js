import React from "react";
import Navbar from "../conponents/Navbar";



export function Contacts() {
  return (
    <>
      <Navbar />

      <div class=''>
        <div class="container">
          <div class="contact-box">
            <div class="left"></div>
            <div class="right">
              <h2>Contact Us</h2>
              <li>
              <input type="text" class="field" placeholder="Your Name" />
              <input type="text" class="field" placeholder="Your Email" />
              <input type="text" class="field" placeholder="Phone" />
              <textarea placeholder="Message" class="field"></textarea>
              <button class="btn">Send</button>
              </li>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}