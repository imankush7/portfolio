import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiHeroku,SiNetlify } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{fontSize:"18px"}}>VS code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div style={{fontSize:"18px"}}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div style={{fontSize:"18px"}}>Heroku</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <div style={{fontSize:"18px"}}>Netlify</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
