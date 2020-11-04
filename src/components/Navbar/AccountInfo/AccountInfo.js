import React from "react";
import "./AccountInfo.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Login from "../../../pages/Login/Login";
import Register from "../../../pages/Register/Register";
import { auth } from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/user/userSlice";
import DialogComponent from "../../Dialog/DialogComponent";

export default function AccountInfo() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const user = useSelector(selectUser);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const [openRegister, setOpenRegister] = React.useState(false);

  const handleRegisterClickOpen = () => {
    setOpenRegister(true);
  };

  const handleRegisterClickClose = () => {
    setOpenRegister(false);
  };

  return (
    <div>
      <IconButton
        style={{ outline: "none" }}
        edge="end"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircleIcon className="img__size"></AccountCircleIcon>
        <span className="iconu_pavadinimai_navbare">My Account</span>
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {user ? (
          <>
            <Link to="/items">
              <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
            </Link>
          </>
        ) : (
          <>
            <MenuItem onClick={handleClickOpen}>Login</MenuItem>
            <div>
              <DialogComponent
                dialogClickHandleClose={handleClickClose}
                dialogClickHandleOpen={open}
                dialogInfo={<Login />}
              />
            </div>
            <MenuItem onClick={handleRegisterClickOpen}>Register</MenuItem>

            <div>

            <DialogComponent
                dialogClickHandleClose={handleRegisterClickClose}
                dialogClickHandleOpen={openRegister}
                dialogInfo={<Register />}
              />
            </div>
          </>
        )}
      </Menu>
    </div>
  );
}
