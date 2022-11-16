import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './conponents/Navbar.js';
import AuthorCard from "./conponents/AuthorCard.js";
import WorkCard from "./conponents/WorkCard.js";
import EducationalCard from "./conponents/EducationalCard.js";
import HobbiesCard from "./conponents/HobbiesCard.js";

function App() {
  const [isActive, setISActive] = useState({
    active: true,
    name: 'education'
  });
  return (
    <>
      <Navbar />
      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <AuthorCard {...{ isActive, setISActive }} />
            {
              isActive.name === "work" ?
                <WorkCard /> : isActive.name === "education" ? <EducationalCard /> : <HobbiesCard />
            }

          </div>
        </main>
      </div>
    </>
  );
}

export default App;
