import React from "react";

import ProjectCard from "./ProjectCard";

import INFO from "./UserData";
import "../pages/style.css"

const ProjectGallery = () => {

	return (
		<div className="all-projects-container">
			{INFO.projects.map((project) => (
				<div className="all-projects-project" >
					<ProjectCard
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectGallery;
