import React from "react";
import "../../../MainPage.css";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

export const IconButtons = (props) => {

  return (
    <Link to={props.linkTo} style={{ textDecoration: "none" }}>
    <IconButton>
      <Badge
        badgeContent={props.badge}
        color="secondary"
      >
        {props.icon}
      </Badge>
    </IconButton>
    </Link>
  );
};
