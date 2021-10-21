import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import mail from "../../Assets/Projects/MailChimp.png";
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
              tech=" HTML, CSS, JavaScript, React"
              duration=" 1 Week"
              Features="Sign-In/Sign-Up, Description of Fundraisers, SearchBar for Navigation"
             // linkmedium="https://avinashrexx.hashnode.dev/cloning-of-agoda-website"
              linklive="https://ketto.herokuapp.com"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="MailChimp Clone"
              duration=" 1 Week"
              description="Cloned Mailchimp which is an American marketing automation platform and email marketing service, used by businesses to manage their mailing lists and create email marketing campaigns and automations to send to customers.  "
             tech=" HTML, CSS, JavaScript, React, Express, mongoDB, mongoose"
              link="https://github.com/harshchaturvedi1/mailChimp-clone"
              linkmedium=""
              linklive="https://mail-chimp-clone.vercel.app/"
              Features=" Log-In/Sign-Up, Dashboard, Create an Email, emailTemplates"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bluemercurry Clone"
              duration=" 1 Week"
              description="A cloned web application of bluemercury.com, a US-based website that sells cosmetics products and provides a wide range of products to choose from."
             tech=" HTML, CSS, JavaScript,LocalStorage"
              link="https://github.com/iampiyushkr/bluemercuryClonn"
              linkmedium="https://imankush7.hashnode.dev/cloning-bluemercury"
              linklive="https://bluemercurryclone.netlify.app"
              Features=" Sign-In/Sign-Up,Product Section Page,Add/Remove items in cart "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
