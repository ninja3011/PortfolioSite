import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <Typewriter
            options={{
              strings: [
                "LFX'21 @ RISC-V ",
                "GSOC'21 @ FOSSi Foundation",
                "Delta'21 @ Delta Electronics",
                "Eklavya'20 @ SRA, VJTI",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 80,
            }}
          />
            <p className="home-about-body">
              I fell in love with RISC-V and Circuit Design last december and I have tried my best 
              to learn as much as I could on it.🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Verilog, C++, Javascript and Python </b>
              </i>
              <br />
              <br />And some of the hip technologies like
              <i>
                <b className="purple"> TL-Verilog, Blockly and Rust </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Circuit Design Tools and Improvements </b> and
                also in areas related to{" "}
                <b className="purple">
                  RISC-V
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Verilog</b> and
              <i>
                <b className="purple">
                  {" "}
                  riscv-gnu-toolchain
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> RISC-V CPU Core</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">

            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/ninja3011"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/ninad_jangle"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ninadjangle/ "
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ninadjangle/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.youtube.com/channel/UCo0bMR_d6JmcS9x1PqfDF6A"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillYoutube />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
