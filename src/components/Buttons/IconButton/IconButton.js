import React from "react";
import "../../../MainPage.css";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "./IconButton.css";

export const IconButtons = (props) => {

  return (
    <Link to={props.linkTo} style={{ textDecoration: "none" }}>
    <IconButton style={{outline: 'none'}}>
      <Badge
        badgeContent={props.badge}
        color="secondary"
      >
        {props.icon}
      </Badge>
      <span className="iconu_pavadinimai_navbare">{props.text}</span>
    </IconButton>
    </Link>
  );
};
