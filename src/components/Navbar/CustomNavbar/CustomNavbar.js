import React from "react";
import "./CustomNavbar.css";
import AccountInfo from "../AccountInfo/AccountInfo";
import { Link } from "react-router-dom";
import { IconButtons } from "../../Buttons/IconButton/IconButton.js";
import MailIcon from "@material-ui/icons/Mail";
import HelpIcon from "@material-ui/icons/Help";
import DialogComponent from "../../Dialog/DialogComponent";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../../features/favorites/FavoritesSlice";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChooseCity from "../../Dialog/Dialogs/ChooseCity";

export default () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const products = useSelector(selectFavorites);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="containeris">
          <Link to="/items" className="navbar-brand">
            Share Things
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="searchas">
              <div className="searcho_laukas">
                <input
                  type="text"
                  className="input"
                  placeholder="Search..."
                ></input>
              </div>

              <div className="btn-group">
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
              <DialogComponent
                dialogClickHandleClose={handleClose}
                dialogClickHandleOpen={open}
                dialogInfo={<ChooseCity />}
              />
              <button className="searcho_mygtukas">
                <SearchIcon className="searcho_icona" />
              </button>
            </div>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <IconButtons
                  linkTo="/favorites"
                  badge={products.filter((product) => product.added).length}
                  icon={<FavoriteIcon className="color__set__white" />}
                  text="Favorites"
                />
              </li>
              <li className="nav-item active">
                <IconButtons
                  linkTo="/chat"
                  badge="3"
                  icon={<MailIcon className="color__set__white" />}
                  text="Messages"
                />
              </li>
              <li className="nav-item active">
                <IconButtons
                  linkTo="/pagerules"
                  icon={<HelpIcon className="color__set__white" />}
                  text="Info"
                />
              </li>
              <li className="nav-item active">
                <AccountInfo />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
