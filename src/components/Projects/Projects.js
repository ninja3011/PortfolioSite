import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eyantra from "../../Assets/Projects/eyantra.jpeg";
import lfx from "../../Assets/Projects/lfx.png";
import riscv_cpu from "../../Assets/Projects/riscv_cpu.png";
import delta from "../../Assets/Projects/delta.png";
import bitcomputer from "../../Assets/Projects/8bitcomputer.png";
import gsoc from "../../Assets/Projects/gsoc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lfx}
              isBlog={false}
              title="Porting Spidermonkey to RISC-V (Ongoing)"
              org = " RISC-V @ The Linux Foundation"
              description="Cross-compile Spidermonkey to RV64GC Linux (Fedora) platform. Write patches that let Spidermonkey running on RV64GC Linux under interpreter mode. Port the baseline compilers so that Spidermonkey can enable at least one JIT compiler on RV64GC platform"
              link="https://mentorship.lfx.linuxfoundation.org/project/fb9e1ba6-d6ed-40b5-82b5-ee1089ef050a"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gsoc}
              isBlog={false}
              title="Block Based Circuit Design"
              org = "Google Summer of Code @ FOSSi Foundation"
              description=" A Block-Based TL-Verilog solution for developers and new entrants to the sphere. Powered by Blockly from Google, it delivers a simple, concise, and intuitive gateway to Circuit Design.  By the gamification of the process, it makes learning and tinkering with circuit design fun, further tearing down the barriers to entry."
              link="https://github.com/ninja3011/Block_Based_Circuit_Design"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={delta}
              isBlog={false}
              title="PSP Bot"
              org = "Delta Competition | 2nd Prize"
              description=" Under the mentorship of Dr. Faruk Kazi, Ideated, Designed and Manufactured a bot for a problem faced by the packaging Industry when dealing with varied sized items such is the case
              with subscription boxes. received more than Rs 16 Lakh in-kind equipment grant from Delta Electronics to build PoC under #Smart #Automation theme of #IIoT. "
              link="https://youtu.be/BURPgDBEjFA"
            />
          </Col>


        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riscv_cpu}
              isBlog={false}
              title="RISC-V CPU CORE"
              org = "MYTH Design"
              description="Designed a rv64I RISC-V CPU Core in TL-Verilog and ran programs such as summation(9) on it. As an addition, also built a calculator with memory. Ran C programs using the riscv-gnu-toolchain cross compiler and debugged and studied the assembly code for reverse engineering"
              link="https://github.com/ninja3011/riscv-cpu-core"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eyantra}
              isBlog={false}
              title="Vitarana Drone"
              org = "Eyantra @IIT Bombay | Top 25"
              description="Vitarana i.e. distribution drone is an UAV designed in Gazebo and controlled using ROS for disaster management and delivery pick and drop drone on a scheduler algorithm with path planning using waypoint navigation"
              link="https://github.com/dhruvi29/EYRC-VD1632"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcomputer}
              isBlog={false}
              title="8 Bit Computer "
              org = "Eklavya Summer Mentorship"
              description="Designed an 8 Bit Computer in Logisim along with an assembler in C with a custom ASM Language for users to program in and ran popular programs such as fibonacci, odds and gm series.  "
              link="https://github.com/ninja3011/8bitcomputer"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
