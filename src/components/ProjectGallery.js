import React from "react";

import ProjectCard from "./ProjectCard";

import INFO from "./UserData";

const ProjectGallery = () => {

	return (
		<div>
			{INFO.projects.map((project) => (
				
					<ProjectCard
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				
			))}
		</div>
	);
};

export default ProjectGallery;
