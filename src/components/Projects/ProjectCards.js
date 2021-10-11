import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";

import "./proj.css";
import { Col } from "react-bootstrap";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <br />
      <Card.Title><a href={props.linklive} target="_blank" style={{color:"whitesmoke"}}>{props.title}</a></Card.Title>
      <Card.Img
        src={props.imgPath}
        alt="card-img"
        style={{ height: "250px" }}
      />
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Col md={12} className="home-about-social">
          <h1></h1>
          <p>
            Find<span className="purple"> More </span>below
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={props.linkmedium}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillMediumCircle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={props.linklive}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <RiLiveLine />
              </a>
            </li>
          </ul>
        </Col>
        {/* <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <br />
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          style={{ marginLeft: "20px" }}
        >
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button> */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
