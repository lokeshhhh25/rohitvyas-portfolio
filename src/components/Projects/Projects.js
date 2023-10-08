import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ludo ZONE"
              description="Ludo, one of the most popular multiplayer strategy
board games, is generally played between 2 or 4
players. The objective of each player is to race their
four tokens to their house based on rolls of a single
dice. Ludo finds its origins in the Indian game Pachisi."
              ghLink=""
              demoLink="www.zoneludo.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Sports Info COMPANY"
              description="team of experts, who analyze and
research on every matches and try
to put up the best wining
combination for the matches that
can help you to win all the matches
on Fantasy App."
              ghLink=""
              demoLink="www.Thesportzinfo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="TEAM 11"
              description="Team11 App -Fantasy Prediction &
Tips SL GL Team for cricket football
basketball
"
              ghLink=""
              demoLink="www.Thesportzinfo.com"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
