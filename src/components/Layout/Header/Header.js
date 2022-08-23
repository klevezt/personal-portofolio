import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar sx={{ paddingLeft: 0 }}>Portofolio</Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
