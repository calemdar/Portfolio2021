import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import TMBackground from "../../Assets/Projects/TM-main-page.png";
import ROTNPoster from "../../Assets/Projects/rhythm-of-the-night.png";
import StickItCover from "../../Assets/Projects/stick-it-cover.png";
import GraphicsSimulation from "../../Assets/Projects/cemgraphics.png";
import HCI from "../../Assets/Projects/hci.jpg";
import Emotion from "../../Assets/Projects/emotion-matcher.jpg";

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
              imgPath={TMBackground}
              isBlog={false}
              title="Tune Mountain"
              description="An audiovisual snowboarding game where the music drives the level. Pick your music and slide down your Tune Mountain."
              link="https://www.tune-mountain.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ROTNPoster}
              isBlog={false}
              title="Rhythm Of The Night"
              description="A rhythm based hack and slash game made with Unreal Engine"
              link="https://2-4.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GraphicsSimulation}
              isBlog={false}
              title="Graphical Simulations"
              description="Simulations made using GLSL and HLSL. Some of the projects may require a smaller window size to work better."
              link="https://cemgraphics.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StickItCover}
              isBlog={false}
              title="Stick It!"
              description="A browser based puzzle game about leaving a mark in history, and utilizing the marks to get to the goal. I wrote all of the code for this project, and had the help of an artist for design and art assets."
              link="https://team-tree.github.io/stick_it4.0/game.html"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={HCI}
              link="https://medium.com/@cemalemdar98/design-manifesto-9c9d10580cf5"
              title="Design Manifesto"
              site="medium.com"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={Emotion}
              link="https://medium.com/@cemalemdar98/design-for-well-being-4d3c51e8593a"
              title="Design For Well-being"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
