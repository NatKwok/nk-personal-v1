import React from "react";
import "../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

function Main() {
  return (
    <motion.div
      className="homepagebackground"
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ ease:"easeIn", duration: 1, x: { duration: 1 } }}
    >
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="headtext">
              Hello <span className="wave">👋 </span>
            </h2>
            <h2 className="nametext">I'm Nathaniel Kwok</h2>
            <span></span>

            <button
              onClick={() => {
                window.open("https://github.com/NatKwok");
              }}
              className="socailmediabtn"
            >
              <AiFillGithub className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://www.linkedin.com/in/natkwok902/");
              }}
              className="socailmediabtn"
            >
              <FaLinkedinIn className="icon" />
            </button>
            <button
              onClick={() => {
                window.open("https://instagram.com/nater__totts");
              }}
              className="socailmediabtn"
            >
              <AiFillInstagram className="icon" />
            </button>
          </Col>

          {/* <Col md={7}>
            <div className="imagedeveloper"></div>
          </Col> */}
        </Row>
      </Container>
    </motion.div>
  );
}

export default Main;
