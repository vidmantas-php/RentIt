// import React, { useState } from "react";
import React from "react";
import "./Navbar.css";
import { Navbar, Form, FormControl } from "react-bootstrap";
import AccountInfo from "../AccountInfo/AccountInfo";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

export default () => {
  // const [inputSearch, setInputSearch] = useState("");

  return (
    <Navbar className="navbar__flex" bg="dark" variant="dark">
      <Navbar.Brand href="/items">Share Things</Navbar.Brand>
      <Form inline className="input__container__width searchas-navbare">
        <FormControl
          type="text"
          placeholder="Search..."
          className="mr-sm-2 input__width"
        />
        <IconButton edge="end" color="inherit">
          <SearchIcon className="search__icon__size"></SearchIcon>
        </IconButton>
      </Form>
      <div>
        {/* <Button redirect="/register">Register</Button>
        <Button redirect="/login">Login</Button> */}
        <AccountInfo />
      </div>
    </Navbar>
  );
};
