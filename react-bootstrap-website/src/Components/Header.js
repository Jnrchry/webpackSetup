import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./header.css";
import Play from "../images/play.png";
import Home from "../images/home2.png";
import Wave from "../images/wave1.png";

const Header = () => {
  return (
    <section id="banner">
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="promo-title">Best Digital Agency</h1>
            <p>
              Subscribe Easy tutorials Youtube Channel to watch more videos on
              website development,Digital Marketing, Wordpress and Graphic
              Desgining
            </p>
            <a href="#">
              <img src={Play} alt="" className="play-btn" />
              Watch Tutorials
            </a>
          </Col>
          <Col md={6} className="text-center">
            <img src={Home} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <img src={Wave} alt="" className="bottom-img" />
    </section>
  );
};

export default Header;
