import React from "react";
import "../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "bs5-lightbox";
import laravel from "../media/laravel_logo.png";
import react from "../media/react_logo.png";
import python from "../media/python_logo.png";
import js from "../media/js_logo.png";
import pix4d from "../media/pix4d_logo.png";
import pospac from "../media/pospac.png";
import globalmapper from "../media/global_mapper_logo.png";
import php from "../media/php_logo.png";

function Skills() {
  return (
    <div className="resumebackground">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="resumeheader">Skills Used</h2>
            <div class="row">
              <h2 className="resumetext">Languages</h2>
              <a
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-sm-4"
              >
                <img src={js} class="img-fluid" width="100"></img>
              </a>
              <a
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-sm-4"
              >
                <img src={python} class="img-fluid" width="200"></img>
              </a>
              <a
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-sm-4"
              >
                <img src={php} class="img-fluid" width="200"></img>
              </a>
            </div>

            <div class="row">
              <h2 className="resumetext">Frameworks</h2>
              <a
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-sm-4"
              >
                <img src={laravel} class="img-fluid" width="100"></img>
              </a>
              <a
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-sm-4"
              >
                <img src={react} class="img-fluid" width="200"></img>
              </a>
            </div>
            <div class="row">
              <h2 className="resumetext">Geomatics Software</h2>
              <a
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-sm-4"
              >
                <img src={pospac} class="img-fluid" width="250"></img>
              </a>
              <a
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-sm-4"
              >
                <img src={pix4d} class="img-fluid" width="150"></img>
              </a>
              <a
                data-toggle="lightbox"
                data-gallery="example-gallery"
                class="col-sm-4"
              >
                <img src={globalmapper} class="img-fluid" width="170"></img>
              </a>
            </div>
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
