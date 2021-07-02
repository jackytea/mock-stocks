import React from "react";
import About from "./About/About";
import Landing from "./Landing/Landing";
import Showcase from "./Showcase/Showcase";
import Features from "./Features/Features";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <Landing/>
    <Showcase/>
    <About/>
    <Features/>
    </>
  );
}

export default Home;

