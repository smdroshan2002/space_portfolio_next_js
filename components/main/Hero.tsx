import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-140px] left-0 h-full w-full z-[1] object-cover">
        <source src="/rotated_sun_video.mp4" type="video/mp4" />
      </video>
      <HeroContent className="relative z-[1]" />
    </div>
  );
};

export default Hero;
