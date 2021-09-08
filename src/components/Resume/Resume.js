import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/NinadJangleResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(5);
  const [cgpa, upadteCgpa] = useState(9.52);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Open Source Developer [ LFX Mentorship @ RISC-V ]"
              date="September 2021 - Present"
              content={[
                " Cross compiling Spidermonkey for RISC-V",
                " Made a riscv64 image on qemu to run native builds",
                " Built Spidermonkey on x86 and ran benchmarks",
                " Ran regression tests on spidermonkey post changes"
              ]}
            />
            <Resumecontent
              title="Open Source Developer [ Google Summer Of Code @ FOSSi Foundation ]"
              date="June 2021 - September 2021"
              content={[
                " Designing and Developed a TL-Verilog solution for developers and new entrants to the sphere.",
                " Powered by Blockly from Google, it will deliver a simple, concise, and intuitive gateway to Circuit Design.",
                " Developed a TL-Verilog Generator from scratch in JavaScript and developed a dashboard for visualising it with Blockly.",
                " Tested and Presented the solution at a seminar showcasing its power of designing complex circuits of validity tutorials and memory based calculators using simple drag and drop feature of blocks.",
                " Researched and Calibrated non-documented instructions from the JS based Blockly library and realised the intended designs and blocks."
              ]}
            />
            <Resumecontent
              title="Team Leader, Indian Division Representative [ 7th International Delta Automation Cup ]"
              date="May 2021 - July 2021"
              content={[
                " Designed a solution for a problem faced by the packaging Industry when dealing with varied sized items such is the case with subscription boxes.",
                " Developed the project through the whole life-cycle from design to modelling to manufacturing and programming of the system.",
                " Calibrated mechanical and software offsets and achieved an efficient working model.",
                " Networked and implemented a system using a PLC, Servo Drivers, Machine Vision System, IIOT devices.",
                " Received the Second Prize in the Finals i.e. Ranked in Top 40."
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="MOOC Binger"
              content={[
                "Successfully Built a 16 Bit HACK Microprocessor by following the Nand2Tetris Course on Coursera. Along with various other up-skilling courses.",
              ]}
            />
            <Resumecontent
              title="Electronics Head [ SRA, VJTI ]"
              content={[
                " Conducted Trainings for Juniors and peers on projects based on ROS and TL-Verilog. Ranked third in an intra-club SLAM Competition in which we built a DDR that performs grid solving, line following using cv2, QR decoder and more",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Electronics Engineering [VJTI, Mumbai] "
              date="2019 - Present"
              content={[`CGPA: 9.52 (Till 4th Sem)`]}
            />
            <Resumecontent
              title="Coursework [Monash, Melbourne]"
              date="2017 - 2018"
              content={["Cmpleted 36 Credits towards B.E Honors" ]}
            />
            <Resumecontent
              title="12TH BOARD [R.N. Podar, Mumbai ]"
              date="2015 - 2017"
              content={["Precentage: 92%"]}
            />
            <Resumecontent
              title="10TH BOARD [H.F.S, Mumbai] "
              date="2005 - 2015"
              content={["Precentage: 95.8%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Branch (Electronics) : 1`,
                `2nd Prize in International Delta Automation Cup (Top 40)`,
                "Top 25 teams in Eyantra 2020-21",
                "Selected as Upcoming Summer Intern for JP Morgan ",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
