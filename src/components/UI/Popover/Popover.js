import { Avatar, Popover } from "@mui/material";
import React from "react";

const PopoverUI = ({ title, src, id, theme }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="ml-1 mb-1">
      <Avatar
        alt="avatar"
        src={src}
        style={{width: "26px", height: "26px"}}
        className={`border-2 border-teal-500 hover:cursor-pointer ${
          theme === "dark" ? "bg-black/[.65]" : ""
        }`}
        aria-owns={open ? id : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      />
      <Popover
        id={id}
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <h4 className="py-1 px-2 m-0 text-lg">{title}</h4>
      </Popover>
    </div>
  );
};

export default PopoverUI;
