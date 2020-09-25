// import React, { useState } from "react";
import React from "react";
import "./Menu.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default () => {
  return (
    <div className="mainMenu">
      <a href="/items">Home</a>
      <a href="#cars">Cars</a>
      <a href="#tools">Tools</a>
      <a href="#about">About</a>
      <a href="#contacts">Contacts</a>
      <a href="/pagerules">Page Rules</a>
      <a href="/newitem">New Item</a>
      <a href="#more">
        <ExpandMoreIcon />
      </a>
    </div>
  );
};
