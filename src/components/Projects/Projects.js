import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/Indegogo.PNG";
import editor from "../../Assets/Projects/Bluemercurry.PNG";
import kettoimg from "../../Assets/Projects/KettoImg.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={kettoimg}
              isBlog={false}
              title="Ketto Clone "
              description="Cloned web App of Ketto, which is an Indian online crowdfunding platform,where any individual/organ across the country can raise funds for causes ranging from medical healthcare to disaster relief."
              link="https://github.com/Ramlala-Yadav-Git/ketto-clone"
             // linkmedium="https://avinashrexx.hashnode.dev/cloning-of-agoda-website"
              linklive="https://ketto.herokuapp.com"
            />
          </Col>

          {/* <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Indiegogo Clone"
              description="Indiegogo is a website which offers two types of functionalities Donation and Fund-Raising. If anyone have any creative idea then he/she can fill a form and get a donation from any users if anyone likes their ideas. "
              link="https://github.com/Avinash7564/indiegogo-clone"
              linkmedium="https://avinashrexx.hashnode.dev/indiegogo-clone"
              linklive="https://indiegogo-clone.netlify.app"
            />
          </Col> */}

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bluemercurry Clone"
              description="A cloned web application of bluemercury.com, a US-based website that sells cosmetics products and provides a wide range of products to choose from"
              link="https://github.com/iampiyushkr/bluemercuryClonn"
              linkmedium="https://imankush7.hashnode.dev/cloning-bluemercury"
              linklive="https://bluemercurryclone.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
