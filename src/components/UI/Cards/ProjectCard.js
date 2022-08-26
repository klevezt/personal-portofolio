import { Button, Fade, Backdrop, Modal } from "@mui/material";
import React from "react";
import reactDom from "react-dom";
import { NavLink } from "react-router-dom";

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
        <div>
          <img
            src={thumbnail}
            alt="project-thumbnail"
            onClick={handleClose}
          />
        </div>
      </Fade>
    </Modal>,
    document.getElementById("modal-root")
  );

  return (
    <div className="p-8 bg-white rounded border-2 border-teal-500 shadow ">
      <h2 className="text-2xl mb-4 text-teal-600 uppercase underline underline-offset-8">
        {title}
      </h2>
      <img
        src={thumbnail}
        alt="project-thumbnail"
        className="mb-4"
        onClick={handleOpen}
      />
      <a href={demo} className="no-underline" rel="noreferrer" target="_blank">
        <Button variant="outlined">
          <strong className="uppercase leading-normal">demo</strong>
        </Button>
      </a>
      <NavLink to="/" className="no-underline">
        <Button variant="outlined">
          <strong className="uppercase leading-normal">more</strong>
        </Button>
      </NavLink>
      {modal}
    </div>
  );
};

export default ProjectCard;
