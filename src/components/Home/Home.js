import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

// export default class Home extends React.Component<Props, State> {

// constructor(props) {
//   super(props);
//   this.updateDimensions = this.updateDimensions.bind(this);
//   this.state = {
//     width: 0,
//     height: 0,
//     imgWidth: 0,
//     imgHeight: 0,
//     imgHeightMax: 0,
//     imgWidthMax: 0
//   };
// }

// function updateDimensions() {
//   let w = window,
//     d = document,
//     documentElement = d.documentElement,
//     body = d.getElementsByTagName("body")[0],
//     inner = d.querySelector(".inner");

//   //this calculates the padding %
//   const height = inner.clientHeight - inner.clientHeight * 0.15;
//   const width = inner.clientWidth - inner.clientWidth * 0.15;

//   let imgWidth = width;
//   //calculates hight base os aspect ratio
//   let imgHeight = (imgWidth * height) / width;

//   //if height is greater than the inner container, set the maximun size and recalculate width base on max-height
//   if (imgHeight > height) {
//     imgHeight = height;
//     imgWidth = (imgHeight * width) / height;
//   }

//   this.setState({ width, height, imgWidth, imgHeight });
// }

// componentDidMount() {

// }
// updateDimensions() {
//   let w = window,
//     d = document,
//     documentElement = d.documentElement,
//     body = d.getElementsByTagName("body")[0],
//     inner = d.querySelector(".inner");

//   const imgBaseWidth = 800;
//   const imgBaseHeight = 1440;

//   //this calculates the padding %
//   const height = inner.clientHeight - inner.clientHeight * 0.15;
//   const width = inner.clientWidth - inner.clientWidth * 0.15;

//   let imgWidth = width;
//   //calculates hight based on aspect ratio
//   let imgHeight = (imgWidth * imgBaseHeight) / imgBaseWidth;

//   //if height is greater than the inner container, set the maximun size and recalculate width base on max-height
//   if (imgHeight > height) {
//     imgHeight = height;
//     imgWidth = (imgHeight * imgBaseWidth) / imgBaseHeight;
//   }

//   this.setState({ width, height, imgWidth, imgHeight });
// }

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Welcome! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I AM
                <strong className="main-name"> CEM ALEMDAR</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid"
                //ref={el => (this.imgEl = el)}
                style={{
                  //width: imgWidth > 0 ? imgWidth : null,
                  //height: imgHeight > 0 ? imgHeight : null
                }} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
