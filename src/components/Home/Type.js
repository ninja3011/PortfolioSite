import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
    <Typewriter
      options={{
        strings: [
          "Open Source Contributor",
          "Circuit Design",
          "RISC-V",
          "Verification",
          "FPGAs",
          "ROS",
          "Industrial Automation",

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />

  </>
  );
}

export default Type;

