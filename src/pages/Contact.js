import React from "react";
import "../pages/style.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
    className="contactbackground"
    initial={{ opacity: 0.7 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeIn", duration: 1, x: { duration: 1 } }}
    >
      <Container>
        <h2 className="contacthead">Contact Me</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a geospatial developer
          role. <br /> If you have any questions regarding my work, please feel
          free to contact me <br /> and I will get back to you as soon as I can!
        </p>
        <button
          className="contactbtn"
          onClick={() => {
            window.open("https://www.instagram.com/nater__totts/");
          }}
        >
          Say Hello
        </button>
        <span></span>
      </Container>
    </motion.div>
  );
}

export default Contact;
