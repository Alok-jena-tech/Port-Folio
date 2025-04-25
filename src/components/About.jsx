import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10 bg-[#78737315]"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">About</h1>
        <p>
        Hello, I'm Alok Kumar Jena, a passionate Web developer with a
          keen eye for MERN Stack . With a background in IT, I strive to create
          impactful and visually stunning Software solutions that leave a
          lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <ul className="mt-2">
          <li className="text-xl">
          1.Full Stack developement with Mern stack (Aug-2024
            to April-2025)
          </li>
          <p>Skyy Skill Acadamy, BBSR</p>
        </ul>
        <ul className="mt-5">
          <li className="text-xl">
            2. Master In Computer Application(MCA) (2022 to 2024)
          </li>
          <p>Biju Pattnaik University And Technology (BPUT), Roulkela</p>
          <p>CGPA: 7.9</p>
        </ul>
        <ul className="mt-5">
        <li className="text-xl">3. Graduation In BSC (2015 to 2018)</li>
          <p>Utkal University,Bhubaneswar</p>
          <p>59%</p>
        </ul>
        <ul className="mt-5">
          <li className="text-xl">
          4. +2 Science (Intermediate) (2012 to 2014)
          </li>
          <p>Council Higher Secondary Education (CHSE), Odisha</p>
          <p>53%</p>
        </ul>
        <ul className="mt-5">
          <li className="text-xl">5. 10th </li>
          <p>Board Of Secondary Education, Odisha </p>
          <p>CGPA: 57%</p>
        </ul>
        
        <br />
        <br />
     
      </div>
    </div>
  );
}

export default About;
