import React from "react";
import { Button, Container, Toolbar } from "@mui/material";
import MainBlock from "../../hoc/MainBlock";
import PersonalDescription from "./PersonalDescription";
import ProjectCard from "../../UI/Cards/ProjectCard";
import IndexCarousel from "./IndexCarousel";
import { NavLink } from "react-router-dom";

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
        <ProjectCard
          title={project.title}
          demo={project.demo}
          thumbnail={project.thumbnail}
        />
      </div>
    );
  });

  return (
    <>
      <div className="relative">
        <div
          className="h-[100vh]"
          style={{
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundImage: "url(daniel-josef-AMssSjUaTY4-unsplash.jpg)",
            zIndex: "-1",
          }}
          alt="index-banner"
        ></div>
        <IndexCarousel />
      </div>

      <Container maxWidth="xl" className="pt-20 ">
        <div className="row">
          <div className="col-12">
            <MainBlock>
              <h2 className="text-2xl font-bold text-teal-600 uppercase">
                Projects
              </h2>
              <hr className="my-6 opacity-20" />

              <div className="row">{allProjects}</div>
              <div className="row mt-4">
                <NavLink to="/" className="no-underline d-flex justify-center m-auto w-auto">
                  <Button variant="contained" className="">
                    <strong className="uppercase leading-normal">
                      View all projects
                    </strong>
                  </Button>
                </NavLink>
              </div>
            </MainBlock>
          </div>
        </div>
        <Toolbar id="back-to-top-anchor" />
      </Container>
    </>
  );
};

export default Home;
