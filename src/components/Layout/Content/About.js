import React from "react";
import { Button, Container, Toolbar } from "@mui/material";
import MainBlock from "../../hoc/MainBlock";
import PersonalDescription from "./PersonalDescription";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EducationDescription from "./EducationDescription";
import styles from "./About.module.css";

const About = () => {
  return (
    <Container maxWidth="xl" className="pt-20 mt-5">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9">
          <MainBlock>
            <h2 className="text-2xl font-bold text-teal-600 uppercase">
              about me
            </h2>
            <PersonalDescription />
          </MainBlock>
          <MainBlock>
            <h2 className="text-2xl font-bold text-teal-600 uppercase">
              Education
            </h2>
            <EducationDescription />
          </MainBlock>
        </div>
        <div className="col-12 col-md-4 col-lg-3">
          <MainBlock className="p-0 sticky top-20 sm:w-3/4 md:w-full m-auto mb-5 ">
            <img
              src={"assets/images/IMG_20210111_143254.jpg"}
              alt="profile"
              className={styles["personal-image"]}
            />
            <div className="text-center m-0 py-4">
              <h2>Klevest Palucaj</h2>
              <h5>Frontend - React Developer</h5>
              <hr className="my-6 opacity-20 w-50 mx-auto" />
              <a
                href="mailto:klevestpalucaj@gmail.com"
                className="no-underline"
              >
                <Button
                  variant="outlined"
                  startIcon={<AlternateEmailIcon />}
                  className="break-all"
                >
                  <strong className="lowercase text-sm ">
                    klevestpalucaj@gmail.com
                  </strong>
                </Button>
              </a>
              <div className="flex justify-between items-center max-w-1/3 mx-auto mt-4">
                <a
                  href="https://github.com/klevezt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon sx={{ color: "#000000" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/klevest-palucaj-5744061b9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon sx={{ color: "#0a66c2" }} />
                </a>
                <a
                  href="https://www.freelancer.gr/u/Klevest"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={"assets/images/freelancer-icon.svg"}
                    alt="freelance-icon"
                    width={20}
                  />
                </a>
              </div>
              {/* <hr className="my-6 opacity-20 w-50 mx-auto" /> */}
            </div>
          </MainBlock>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-12">
          <MainBlock>
            <h2 className="text-2xl font-bold text-teal-600 uppercase">
              Licenses & certifications
            </h2>
            <hr className="my-6 opacity-20" />
            <div className="row mx-0">
              <div className="col-4"></div>
              <div className="col-4"></div>
              <div className="col-4"></div>
            </div>
          </MainBlock>
        </div>
      </div> */}
      <Toolbar id="back-to-top-anchor" />
    </Container>
  );
};

export default About;
