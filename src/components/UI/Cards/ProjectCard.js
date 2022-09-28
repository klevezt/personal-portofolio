import { Close, ReportGmailerrorred } from "@mui/icons-material";
import { Button, Fade, Backdrop, Modal } from "@mui/material";
import React, { Fragment } from "react";
import reactDom from "react-dom";
import { NavLink } from "react-router-dom";
import RoundedButton from "../Buttons/RoundedButton";
import styles from "./ProjectCard.module.css";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import PopoverUI from "../Popover/Popover";

const ProjectCard = ({
  title,
  demo,
  thumbnail,
  hasBadges,
  updatedAt,
  badges,
  info = null,
}) => {
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
    <div className="mb-3 p-2.5 md:p-6 bg-white rounded border-teal-500 shadow min-h-[200px]">
      <div className="flex flex-wrap">
        <NavLink to="/" className="no-underline w-auto">
          <h2 className="text-2xl mb-4 mr-3 text-teal-600 uppercase underline underline-offset-8 w-auto">
            {title}
          </h2>
        </NavLink>
      </div>
      <div className={`${styles["thumbnail-wrapper"]}`} onClick={handleOpen}>
        <span className={`${info ? "bg-[#ff9800]" : "bg-teal-600"}`}>
          <ZoomOutMapIcon />
        </span>
        <img src={thumbnail} alt="project-thumbnail" className="mb-4" />
      </div>
      <div className="flex flex-col">
        {hasBadges && (
          <div className="inline-flex items-center mb-3 flex-wrap">
            {badges?.map((badge, i) => {
              return (
                <Fragment key={i}>
                  <PopoverUI
                    title={badge.title}
                    src={badge.src}
                    id={badge.id}
                    theme={badge.theme}
                  />
                </Fragment>
              );
            })}
          </div>
        )}
        <div className="flex flex-wrap justify-between items-end">
          {!info && (
            <a
              href={demo}
              className="no-underline w-max"
              rel="noreferrer"
              target="_blank"
            >
              <Button variant="outlined">
                <strong className="uppercase leading-normal">website</strong>
              </Button>
            </a>
          )}
          {info && (
            <Button variant="contained" color="secondary" className="w-max">
              <ReportGmailerrorred fontSize="medium" />
              <strong className="uppercase leading-normal ml-2">
                working progress
              </strong>
            </Button>
          )}
          {updatedAt && (
            <strong className="text-[8px] m-0 text-teal-600">
              Last Update: {updatedAt}
            </strong>
          )}
        </div>
      </div>
      {modal}
    </div>
  );
};

export default ProjectCard;
