import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Cem Alemdar</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} CA</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/calemdar"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/cem-alemdar-319b9a149/"
                style={{ color: "white" }}
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
              >
                <AiFillMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
