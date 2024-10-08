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
                <NavLink
                  to={"/"}
                  className="text-sm mx-2 text-slate-50 hover:text-black no-underline"
                >
                  Home
                </NavLink>
              </ul>
            </div>
            <div>
              <ul className="pl-0 mb-0 uppercase flex flex-row">
                <li>
                  <NavLink
                    to={"/about"}
                    className="text-sm mx-2 text-slate-50 hover:text-black no-underline"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/projects"}
                    className="text-sm mx-2 text-slate-50 hover:text-black no-underline "
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
