import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ninad Jangle </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I am a 3rd year Student from, V.J.T.I pursuing Electronics Engineering 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the Guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Meeting new people
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about the next billion dollar idea. 
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Do what scares you, till it doesn't"{" "}
          </p>
          <footer className="blockquote-footer">Ninad Jangle</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
