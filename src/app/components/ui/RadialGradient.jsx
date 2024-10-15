"use client";
import React from "react";
import { useEffect, useState } from "react";

const RadialGradient = ({ scale, opacity, position, overflow }) => {
  const [mouseXpercentage, setMouseXPercentage] = useState(0);
  const [mouseYpercentage, setMouseYPercentage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const newMouseXPercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYPercentage = Math.round(
        (event.pageY / windowHeight) * 100
      );

      setMouseXPercentage(newMouseXPercentage);
      setMouseYPercentage(newMouseYPercentage);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const radialGradientStyle = {
    background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #0040ff, ${"#0c1220"})`,
  };

  return (
    <React.Fragment>
      <div
        // rotate-180 for mirrored effect
        className={`radial-gradient-styling absolute ${position} left-0 h-full w-full -z-[1]   ${opacity} ${scale} ${overflow}`}
        style={radialGradientStyle}
      ></div>
    </React.Fragment>
  );
};

export default RadialGradient;
