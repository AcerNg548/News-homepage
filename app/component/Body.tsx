import React from "react";
import SubHero from "./SubHero";
import Hero from "./Hero";

const Body = () => {
  return (
    <div className="w-full p-2  flex flex-col justify-between items-center text-VeryDarkBlue">
      <Hero />
      <SubHero />
    </div>
  );
};

export default Body;
