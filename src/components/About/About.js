import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Aos from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              data-aos="fade-right"
            >
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <div data-aos="fade-right">
              <Aboutcard />
            </div>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
            data-aos="fade-down"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" data-aos="fade-up">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <br /> <br />
        <div data-aos="fade-down">
          <Techstack />
        </div>
        <br />
        <h1 className="project-heading" data-aos="fade-up">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <br />
        <div data-aos="fade-up">
          <Toolstack />
        </div>
        <div data-aos="fade-right">
          <Github />
        </div>
      </Container>
    </Container>
  );
}

export default About;
