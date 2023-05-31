import React from "react";
import '../pages/style.css';
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Contact Me</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a geospatial developer
          role. <br /> If you have any questions regarding my work, please feel free
          to contact me <br/> and I will get back to you as soon as I can!
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
    </div>
  );
}

export default Contact;