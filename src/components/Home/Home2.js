import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a creator and a tinkerer. I enjoy designing unique experiences and
              building small tools to enjoy what I do and spread that joy to others
              <br />
              <br />For programming I prefer
              <i>
                <b className="purple"> C++, C#, and Javascript. </b>
              </i>
              <br />
              <br />
              I bend technology
              <i>
                <b className="purple"> to create anything I want</b>
              </i>
              &nbsp; mostly using
              <i>
                <b className="purple"> Unity, Unreal, NPM, Arduino</b>
              </i>
              <br />
              <br />
              My professional goals are:
              <ul>
                <li><b className="purple">Designing and implementing immersive systems</b></li>
                <li><b className="purple">Reaching a wide audience</b></li>
                <li><b className="purple">Creating a link between Audio, Visual and Kinesthetic experiences</b></li>
              </ul>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/calemdar"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/cem-alemdar-319b9a149/"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=cemalemdar98@gmail.com&su=Hello there!&body=Pleased to meet you"
                  style={{ color: "white" }}
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
