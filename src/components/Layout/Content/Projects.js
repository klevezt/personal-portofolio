import { Container } from '@mui/material'
import React from 'react'
import MainBlock from '../../hoc/MainBlock';
import ProjectCard from '../../UI/Cards/ProjectCard';
import { AllProjects } from "../../_constants/projects";

const Projects = () => {
  const allProjects = AllProjects.map((project, i) => {
    return (
      <div className="col-12 col-sm-6 col-md-4 mb-4" key={i}>
        <ProjectCard
          title={project.title}
          demo={project.demo}
          thumbnail={project.thumbnail}
          badges={project.badges}
          hasBadges
        />
      </div>
    );
  });
  return (
    <Container maxWidth="xl" className="py-20 mt-5">
      <MainBlock>
        <h2 className="text-2xl font-bold text-teal-600 uppercase">Projects</h2>
        <hr className="my-6 opacity-20" />

        <div className="row">{allProjects}</div>
      </MainBlock>
    </Container>
  );
}

export default Projects