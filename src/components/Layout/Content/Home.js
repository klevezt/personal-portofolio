import React from "react";
import { Container, Toolbar } from "@mui/material";
import MainBlock from "../../hoc/MainBlock";
import PersonalDescription from "./PersonalDescription";
import ProjectCard from "../../UI/Cards/ProjectCard";

const projects = [
  {
    title: "Airflix",
    demo: "https://airflix.herokuapp.com",
    thumbnail: "airflix.jpg",
  },
  {
    title: "E-shop Clone",
    demo: "https://e-shop-clone.web.app/",
    thumbnail: "eshop.jpg",
  },
  {
    title: "Netflix Clone",
    demo: "https://kplc-netflix-clone.web.app/",
    thumbnail: "netflix.jpg",
  },
];

const Home = () => {
  const allProjects = projects.map((project, i) => {
    return (
      <div className="col-12 col-sm-6 col-md-4" key={i}>
        <ProjectCard title={project.title} demo={project.demo} thumbnail={project.thumbnail}/>
      </div>
    );
  });

  return (
    <Container maxWidth="xl" className="pt-20 mt-5">
      <div className="row">
        <div className="col-12 col-md-12">
          <MainBlock>
            <h2 className="text-2xl font-bold text-teal-600 uppercase">
              Welcome
            </h2>
            <PersonalDescription />
          </MainBlock>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <MainBlock>
            <h2 className="text-2xl font-bold text-teal-600 uppercase">
              Projects
            </h2>
            <hr className="my-6 opacity-20" />

            <div className="row">{allProjects}</div>
          </MainBlock>
        </div>
      </div>
      <Toolbar id="back-to-top-anchor" />
    </Container>
  );
};

export default Home;
