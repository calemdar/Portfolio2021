import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiAndroid } from "react-icons/di";
import {
  SiVisualstudio,
  SiUnrealengine,
  SiAtlassian,
  SiAudacity,
  SiIos,
  SiOculus,
  SiEclipseide,
  SiUnity,
  SiArduino,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnrealengine />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOculus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAudacity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAtlassian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
      </Col>
    </Row>
  );
}

export default Toolstack;
