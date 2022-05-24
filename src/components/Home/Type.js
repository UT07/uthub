import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "MERN Stack Developer",
          "Flutter Developer",
          "Quality Assurance Engineer",
          "Data Analyst",
          "Freelancer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 85,
      }}
    />
  );
}

export default Type;
