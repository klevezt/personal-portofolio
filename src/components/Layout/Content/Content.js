import React from "react";
import { Container, Toolbar } from "@mui/material";
import MainBlock from "../../hoc/MainBlock";
import dummy from "../../../IMG_20210111_143254.jpg";

const Content = () => {
  return (
    <Container maxWidth="xl" className="pt-20 mt-5">
      <div className="row">
        <div className="col-9">
          <MainBlock className="h-128">HAHAHH</MainBlock>
        </div>
        <div className="col-3 offset-0">
          <MainBlock className="p-0 sticky top-20 ">
            <img src={dummy} alt="profile" />
            <div className="text-center m-0 py-4">
              <h2>Klevest Palucaj</h2>
              <h4>Frontend - React Developer</h4>
            </div>
          </MainBlock>
        </div>
      </div>
      <Toolbar id="back-to-top-anchor" />
    </Container>
  );
};

export default Content;
