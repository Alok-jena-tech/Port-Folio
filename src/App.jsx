import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Project from "./components/Project";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Experiance />
        <Project />
        <Contact />
      </div>
      <Toaster />
    </>
  );
}

export default App;
