import { Fab } from '@mui/material';
import React from 'react'
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Footer = (props) => {
  return (
    <ScrollToTop {...props}>
      <Fab aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollToTop>
  );
}

export default Footer