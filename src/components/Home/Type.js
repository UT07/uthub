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
          "AWS Certified Cloud Practitioner",
          "Quality Assurance Engineer",
          "Data Analyst",
          "Freelance Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
