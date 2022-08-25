import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar className="p-0">
          <div className="w-100 flex justify-between items-center">
            <div>
              <ul className="pl-0 mb-0 uppercase">
                <li>Portofolio</li>
              </ul>
            </div>
            <div>
              <ul className="pl-0 mb-0 uppercase flex flex-row">
                <NavLink to={"/portofolio"} className="mx-2 text-white no-underline hover:text-black">Portofolio</NavLink>
                <li className="mx-2">Portofolio</li>
              </ul>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
