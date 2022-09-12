import { Button, Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import MainBlock from "../../hoc/MainBlock";
import ProjectCard from "../../UI/Cards/ProjectCard";
import { AllProjects } from "../../_constants/projects";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const Projects = () => {
  const allProjects = AllProjects.map((project, i) => {
    return (
      <div className="col-12 col-md-6 col-lg-4 mb-4" key={i}>
        <ProjectCard
          title={project.title}
          demo={project.demo}
          thumbnail={project.thumbnail}
          badges={project.badges}
          info={project.info}
          hasBadges
        />
      </div>
    );
  });
  return (
    <Container maxWidth="xl" className="py-20 mt-5">
      <MainBlock>
        <div className="flex flex-wrap justify-between">
          <h2 className="text-2xl font-bold text-teal-600 uppercase m-0">
            Projects
          </h2>
          <NavLink
            to="/working-progress"
            className="no-underline"
          >
            <Button variant="outlined" color="secondary">
              <ReportGmailerrorredIcon fontSize="medium"/>
              <strong className="ml-2">View all working progress projects</strong>
            </Button>
          </NavLink>
        </div>
        <hr className="my-6 opacity-20" />

        <div className="row">{allProjects}</div>
      </MainBlock>
    </Container>
  );
};

export default Projects;
