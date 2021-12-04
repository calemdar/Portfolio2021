import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/CemAlemdar2021_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Gameplay Developer [Tiramisu Studios]"
              date="April 2021 - Current"
              content={[
                "Designing and programming casual mobile games using C# in Unity. Worked on Drift Max City and Drift Max Ultimate",
                "My responsibilities are; programming mechanics and systems from design documents, making sure the code is optimized for the target platforms, documenting how these systems work, and writing tools so that designers can easily modify them without touching the code",
              ]}
            />
            <Resumecontent
              title="Project Lead [WPI]"
              date="September 2019 - October 2020"
              content={[
                "Creating and leading a project for an audio-visualizer game called Tune Mountain using Spotify’s Web API.",
                "I developed the website framework and integration between rendering, game physics, and player input. Worked on audio synchronization, procedural terrain generation, dynamic shaders, and project management",
              ]}
            />
            <Resumecontent
              title="Prototype Engineer [WPI]"
              date="June 2020 - September 2020"
              content={[
                "Worked on a medical device to better monitor a method called “Train of Four”. It is a glove that monitors the twitching of the patient’s thumb.",
                "My job was to make the device work on multiple axis of movement, collect more accurate data, and normalize the data collected",
              ]}
            />
            <Resumecontent
              title="Software Development Intern [BaltiVirtual]"
              date="June 2019 - September 2019"
              content={[
                "Was responsible that our AR, VR products were in the best possible condition for everyday user activity.",
                "Worked closely with Jira, Trello, Unity, Three.js, and automated testing using Cypress. Debugged on devices such as OculusRift, MagicLeap, HTCVive, ValveIndex, and many different mobile devices.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science BS [Worcester Polytechnic Institute] "
              date="2016 - 2020"
              content={[
                "Graduated with distinction",
                "Related coursework: Object Oriented Design, Human Computer Interaction, Computer Graphics, Machine Learning",
            ]}
            />
            <Resumecontent
              title="Interactive Media and Game Development BS [Worcester Polytechnic Institute] "
              date="2016 - 2020"
              content={[
                "Graduated with distinction",
                "Related coursework: Game Design, Interactive Electronic Arts, Game Engines, Graphical Simulations of Physical Systems",
              ]}
            />
            <Resumecontent
              title="International Baccalaureate [The Koç School] "
              date="2012 - 2016"
              content={[
                "High school diploma",
                "Related coursework: Information Technologies on a Global Society, Advanced Mathematics"
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="President of Turkish Student Association [WPI]"
              content={[
                "Been a part of the Turkish Student Association at Worcester Polytechnic Institute for four years, Been the president for one year",
                "The goal of the association was to welcome and help other Turkish students that are new to the Worcester area, and share our culture in cultural events",
              ]}
            />
            <Resumecontent
              title="Game Jam Mentor [TOGEV]"
              content={[
                "Mentored game design students making a game for a game jam organized by the Turkish Game Developers Association",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
