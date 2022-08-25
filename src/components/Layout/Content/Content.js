import React from "react";
import { Button, Container, Toolbar } from "@mui/material";
import MainBlock from "../../hoc/MainBlock";
import dummy from "../../../IMG_20210111_143254.jpg";
import PersonalDescription from "./PersonalDescription";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import freelanceIcon from "../../../freelancer-icon.svg";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EducationDescription from "./EducationDescription";

const Content = () => {
  return (
    <Container maxWidth="xl" className="pt-20 mt-5">
      <div className="row">
        <div className="col-12 col-md-9 order-2 order-md-1">
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
        <div className="col-12 col-md-3 offset-0 order-1 order-md-2">
          <MainBlock className="p-0 sticky top-20 ">
            <img src={dummy} alt="profile" />
            <div className="text-center m-0 py-4">
              <h2>Klevest Palucaj</h2>
              <h5>Frontend - React Developer</h5>
              <hr className="my-6 opacity-20 w-50 mx-auto" />
              <a
                href="mailto:klevestpalucaj@gmail.com"
                className="no-underline"
              >
                <Button variant="outlined" startIcon={<AlternateEmailIcon />}>
                  <strong className="lowercase">
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
                  <img src={freelanceIcon} alt="freelance-icon" width={20} />
                </a>
              </div>
              {/* <hr className="my-6 opacity-20 w-50 mx-auto" /> */}
            </div>
          </MainBlock>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <MainBlock>
            <h2 className="text-2xl font-bold text-teal-600 uppercase">
              Projects
            </h2>
          </MainBlock>
        </div>
      </div>
      <Toolbar id="back-to-top-anchor" />
    </Container>
  );
};

export default Content;
