import React from "react";
import FireParticles from "./FireParticles";
import ShinyButton from "./ShinyButton";
import { scroller } from "react-scroll";

const HeroSection = () => {
  const handleScroll = () => {
    scroller.scrollTo("projects-section", {
      duration: 3000, // Smoothness duration (1 second)
      delay: 0,
      smooth: "easeInOutQuart", // Animation type
    });
  };
  return (
    <>
      <header>
        {/* Fire Particles */}
        <FireParticles
          id="fire-particles"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-md">
            Welcome to My <br /> Portfolio 🔥
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-8 drop-shadow-md">
            Let's turn ideas into blazing realities.
          </p>
          <ShinyButton label="Explore my Work" onClick={handleScroll} />
        </div>
      </header>
    </>
  );
};

export default HeroSection;
