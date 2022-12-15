import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./main.css";
import Service1 from "../images/service1.png";
import Service2 from "../images/service2.png";
import Service3 from "../images/service3.png";
import Network from "../images/network.png";
import User1 from "../images/user1.jpg";
import User2 from "../images/user2.jpg";
import Facebook from "../images/facebook-icon.png";
import Instagram from "../images/instagram-icon.png";
import Twitter from "../images/twitter-icon.png";
import Whatsapp from "../images/whatsapp-icon.png";
import Linkedin from "../images/linkedin-icon.png";
import Snapchat from "../images/snapchat-icon.png";
import Wave2 from "../images/wave2.png";
import Footerlogo from "../images/demo-logo.png";
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <section id="services">
        <Container className="text-center">
          <h1 className="title">WHAT WE DO ?</h1>
          <Row className="text-center">
            <Col md={4} className="servicess">
              <img src={Service1} alt="" className="service-img" />
              <h4>Growth Marketing</h4>
              <p>
                Subscribe to Easy tutorials YouTube channel to watch more videos
                on website development, digital marketing, wordpress and graphic
                designing
              </p>
            </Col>

            <Col md={4} id="servicess">
              <img src={Service2} alt="" className="service-img" />
              <h4>Online Branding</h4>
              <p>
                Subscribe to Easy tutorials YouTube channel to watch more videos
                on website development, digital marketing, wordpress and graphic
                designing
              </p>
            </Col>

            <Col md={4} className="servicess">
              <img src={Service3} alt="" className="service-img" />
              <h4>Animated Ads</h4>
              <p>
                Subscribe to Easy tutorials YouTube channel to watch more videos
                on website development, digital marketing, wordpress and graphic
                designing
              </p>
            </Col>
          </Row>
          <button type="button" className="btn btn-primary">
            All Services
          </button>
        </Container>
      </section>

      <section id="about-us">
        <Container>
          <h1 className="title text-center">WHY CHOOSE US ?</h1>
          <Row>
            <Col md={6} className="about-uss">
              <p className="about-title">Why we're different</p>
              <ul>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
              </ul>
            </Col>
            <Col md={6}>
              <img src={Network} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Container>
          <h1 className="title text-center">WHAT CLIENTS SAY</h1>

          <Row>
            <Col md={5} className="testimonialss offset-1">
              <p>
                Subscribe to Easy tutorials YouTube channel to watch more videos
                on website development, digital marketing, wordpress and graphic
                designing
              </p>
              <img src={User1} alt="" />
              <p className="user-details">
                <b>Agelina</b>
                <br />
                Co-Founder at XYZ
              </p>
            </Col>

            <Col md={5} className="testimonialss">
              <p>
                Subscribe to Easy tutorials YouTube channel to watch more videos
                on website development, digital marketing, wordpress and graphic
                designing
              </p>
              <img src={User2} alt="" />
              <p className="user-details">
                <b>John Doe</b>
                <br />
                Co-Founder at XYZ
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social media  */}

      <section className="social-media">
        <Container className="text-center">
          <p>FIND US ON SOCIAL MEDIA</p>
          <div className="social-icons">
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
            <a href="#">
              <img src={Whatsapp} alt="" />
            </a>
            <a href="#">
              <img src={Linkedin} alt="" />
            </a>
            <a href="#">
              <img src={Snapchat} alt="" />
            </a>
          </div>
        </Container>
      </section>

      <footer id="footer">
        <img src={Wave2} alt="" className="footer-img" />
        <Container>
          <Row>
            <Col md={4} className="footer-box">
              <img src={Footerlogo} alt="" />
              <p>
                Subscribe to Easy tutorials YouTube channel to watch more videos
                on website development, digital marketing, wordpress and graphic
                designing. press the bell icon for notification
              </p>
            </Col>

            <Col md={4} className="footer-box">
              <p>
                <b>CONTACT US</b>
              </p>
              <p>
                <FaMapMarkerAlt />
                Nii Odai Ayiku Street
              </p>
              <p>
                <FaMobileAlt />
                +233 558708343
              </p>
              <p>
                <FaEnvelope />
                Jnrchry@gmail.com
              </p>
            </Col>

            <Col md={4} className="footer-box">
              <p>
                <b>SUBSCRIBE NEWSLETTER</b>
              </p>
              <input
                type="email"
                name=""
                id=""
                className="form-control"
                placeholder="Your Email"
              />
              <button type="button" className="btn btn-primary">
                Subscribe
              </button>
            </Col>
          </Row>

          <hr></hr>
          <p className="copyright">Website Crafted by Junior Chry</p>
        </Container>
      </footer>
    </>
  );
};

export default Main;
