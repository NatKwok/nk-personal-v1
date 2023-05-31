import React from 'react';
import '../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import uw from '../media/waterloo_logo.png';
import jac from '../media/jac_logo.png';

function Education() {

  
    return (
<div className='resumebackground'>
      <Container>
        <Row>
      
            <h2 className='resumeheader'>Education</h2>
            <h2 className='resumetext'>Bachelor of Environmental Studies 2013-2018</h2>
            <img src={uw} className='uwlogo'></img>
            <h3>Specialization in Geomatics</h3>
            <h3>University of Waterloo, Ontario, Canada</h3>

            <span></span>
            <br></br>
            <br></br>

            <h2 className='resumetext'>Attestation D’etudes Collegiales (AEC) 2022-2023</h2>
            <img src={jac} className='jaclogo'></img>
            <h3>Full Stack Developer Program</h3>
            <h3>John Abbott College, Quebec, Canada</h3>

            <span></span>
            <br></br>
            <br></br>

           
      
            <button onClick={() => {
              window.open("https://github.com/NatKwok");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/natkwok902/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://instagram.com/nater__totts");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
        


        </Row>
        
        
      </Container>
      
    </div>
    );
  }

  export default Education;