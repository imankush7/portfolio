import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiCss3,
  DiGit
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px", }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineHtml5 />
        <div style={{fontSize:"18px"}}>HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3/>
        <div style={{fontSize:"18px"}}>CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div style={{fontSize:"18px"}}>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div style={{fontSize:"18px"}}>Node</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div style={{fontSize:"18px"}}>ReactJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div style={{fontSize:"18px"}}>MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div style={{fontSize:"18px"}}>Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
