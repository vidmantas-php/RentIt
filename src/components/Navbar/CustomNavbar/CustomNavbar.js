import React from "react";
import "./CustomNavbar.css";

import AccountInfo from "../AccountInfo/AccountInfo";
import { Link } from "react-router-dom";
import { IconButtons } from "../../Buttons/IconButton/IconButton.js";
import MailIcon from "@material-ui/icons/Mail";
import HelpIcon from "@material-ui/icons/Help";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from 'react-redux';
import {
  selectFavorites,
} from "../../../features/favorites/FavoritesSlice";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

export default () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const products = useSelector(selectFavorites)

  return (
    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="containeris">
        <Link to="/items" class="navbar-brand">
            Share Things
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="searchas">
              <div className="searcho_laukas">
                <input
                  type="text"
                  className="input"
                  placeholder="Search..."
                ></input>
              </div>

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
                    Cameras
                  </a>
                  <a className="dropdown-item" href="#action">
                    Sports
                  </a>
                  <a className="dropdown-item" href="#action">
                    Electronics
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#action">
                    Drons
                  </a>
                </div>
              </div>
              <button
                onClick={handleClickOpen}
                className="btn btn-sm dropdown-toggle"
              >
                Miestas
              </button>
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

              <button className="searcho_mygtukas">
                <SearchIcon className="searcho_icona" />
              </button>
            </div>

            <ul className="navbar-nav ml-auto">
              <li class="nav-item active">
                <IconButtons 
                linkTo="/favorites"
                badge={products.filter(product => product.added).length}
                icon={<FavoriteIcon className="color__set__white" />}
                />
              </li>
              <li class="nav-item active">
              <IconButtons 
                linkTo="/chat"
                badge="3"
                icon={<MailIcon className="color__set__white" />}
                />
              </li>
              <li class="nav-item active">
              <IconButtons 
                linkTo="/pagerules"
                icon={<HelpIcon className="color__set__white" />}
                />
              </li>
              <li class="nav-item active">
                <AccountInfo />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
