import React from "react";
import "../pages/style.css";
import { motion } from "framer-motion";
import ProjectGallery from "../components/ProjectGallery";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
    return (

        <motion.div
        className="portfoliobackground"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1, x: { duration: 1 } }}
      >

<ProjectGallery/>



      </motion.div>
    );
}


export default Portfolio;
