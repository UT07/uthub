import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer",
          "Data Engineer",
          "Flutter Developer",
          "AWS Certified Cloud Practitioner",
          "Quality Assurance Engineer",
          "Data Analyst",
          "Freelance Developer"
        ],
        autoStart: true,
        loop: true,
        delay:40,
        deleteSpeed: 10,
      }}
    />
  );
}

export default Type;
