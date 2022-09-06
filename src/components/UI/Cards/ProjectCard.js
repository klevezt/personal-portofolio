import { Close } from "@mui/icons-material";
import { Button, Fade, Backdrop, Modal } from "@mui/material";
import React from "react";
import reactDom from "react-dom";
import { NavLink } from "react-router-dom";
import RoundedButton from "../Buttons/RoundedButton";
import styles from "./ProjectCard.module.css";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const ProjectCard = ({ title, demo, thumbnail }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modal = reactDom.createPortal(
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="h-100 w-100"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      components={Backdrop}
      componentsProps={{
        Backdrop: {
          timeout: 500,
          style: {
            backgroundColor: "rgb(255 255 255 / 50%)",
          },
        },
      }}
    >
      <Fade in={open}>
        <div className="d-flex justify-center items-center h-full">
          <img src={thumbnail} alt="project-thumbnail" />
          <RoundedButton
            className="bg-rose-600 text-white border-2 border-white hover:bg-rose-700"
            onClick={handleClose}
          >
             <Close />
          </RoundedButton>
        </div>
      </Fade>
    </Modal>,
    document.getElementById("modal-root")
  );

  return (
    <div className="p-8 bg-white rounded border-2 border-teal-500 shadow ">
      <NavLink to="/" className="no-underline w-auto">
        <h2 className="text-2xl mb-4 text-teal-600 uppercase underline underline-offset-8 w-auto">
          {title}
        </h2>
      </NavLink>
      <div className={styles["thumbnail-wrapper"]} onClick={handleOpen}>
        <span>
          <ZoomOutMapIcon />
        </span>
        <img src={thumbnail} alt="project-thumbnail" className="mb-4" />
      </div>
      <a href={demo} className="no-underline" rel="noreferrer" target="_blank">
        <Button variant="outlined">
          <strong className="uppercase leading-normal">demo</strong>
        </Button>
      </a>
      {/* <NavLink to="/" className="no-underline">
        <Button variant="outlined">
          <strong className="uppercase leading-normal">more</strong>
        </Button>
      </NavLink> */}
      {modal}
    </div>
  );
};

export default ProjectCard;
