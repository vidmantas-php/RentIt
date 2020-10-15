// import React, { useState } from "react";
import React from "react";
import "./Navbar.css";
import "../../MainPage.css";
import { Navbar, Form } from "react-bootstrap";
import AccountInfo from "../AccountInfo/AccountInfo";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import { FavoritesButton } from "../FavoritesButton/FavoritesButton.js";
import Badge from "@material-ui/core/Badge";
import MailIcon from "@material-ui/icons/Mail";
import HelpIcon from "@material-ui/icons/Help";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default () => {
  // const [inputSearch, setInputSearch] = useState("");

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Navbar className="navbar__flex" bg="dark" variant="dark">
      <Navbar.Brand href="/items">Share Things</Navbar.Brand>
      <div className="display__flex align__all__items__center">

        
        <Form
          inline
          className="search__bar__div display__flex align__all__items__center"
        >
          {/* Searchas */}
          <input
            className="form-control border__none"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          {/* Kategoriju buttonas */}
          <div class="btn-group">
            <button
              className="btn btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Kategorijos
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#action">
                Action
              </a>
              <a className="dropdown-item" href="#action">
                Another action
              </a>
              <a className="dropdown-item" href="#action">
                Something else here
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#action">
                Separated link
              </a>
            </div>
          </div>
          {/* Miestas */}
          <div>
            <Button onClick={handleClickOpen} className="capitalize__button">
              Miestas
            </Button>
            <Dialog
              disableBackdropClick
              disableEscapeKeyDown
              open={open}
              onClose={handleClose}
            >
              <DialogTitle>Pasirinkite Miesta!</DialogTitle>
              <DialogContent>
                <form className={classes.container}></form>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          {/* <FormControl
            type="text"
            placeholder="Search..."
            className="mr-sm-2 input__width"
          ></FormControl> */}
          {/* <IconButton edge="end" color="inherit">
            <SearchIcon className="search__icon__size"></SearchIcon>
          </IconButton> */}
        </Form>


        <IconButton edge="end" color="inherit">
          <SearchIcon className="search__icon__size"></SearchIcon>
        </IconButton>
      </div>
      <div className="menu__right">
        {/* <Button redirect="/register">Register</Button>
        <Button redirect="/login">Login</Button> */}
        <div className="display__flex align__all__items__center">
          <FavoritesButton />

          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            variant="outlined"
            // onClick={handleClickOpen}
          >
            <Badge
              // badgeContent={message}
              badgeContent="4"
              color="secondary"
            >
              <MailIcon className="color__set__white" />
            </Badge>
          </IconButton>

          <NavLink to="/pagerules">
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              variant="outlined"
              // onClick={handleClickOpen}
            >
              <HelpIcon className="color__set__white" />
            </IconButton>
          </NavLink>

          <AccountInfo />
        </div>
      </div>
    </Navbar>
  );
};
