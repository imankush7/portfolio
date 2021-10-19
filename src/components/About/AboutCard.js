import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kumar Ankush </span>
            from <span className="purple"> Bhagalpur, Bihar, India.</span>
            <br /> I have completed my graduation in Computer Science Engineering.
            <br /> I am a passionate developer, a quick-learner, avid explorer and highly motivated person who is always curious to solve new challenges
            <br />I beleive this will lay a sturdy foundation to my mushrooming career.
            <br/>Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that makes  difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ankush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
