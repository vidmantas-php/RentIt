import React from "react";
import "./AccountInfo.css";
// import { Form } from "react-bootstrap";
// import { Button } from "../../components/Button/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Login from "../../../pages/Login/Login";
import Register from "../../../pages/Register/Register";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import "./Login.css";
// import { Form } from "react-bootstrap";
// import { Button } from "../../components/Button/Button";

export default function AccountInfo() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
        edge="end"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircleIcon className="img__size"></AccountCircleIcon>
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <Link to="/login"> */}
        <MenuItem onClick={handleClickOpen}>Login</MenuItem>
        <div>
          <Dialog
            open={open}
            onClose={handleClickClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {/* <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle> */}
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Login />
              </DialogContentText>
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={handleClickClose} color="primary">
                Login
              </Button>
              <Button onClick={handleClickClose} color="primary" autoFocus>
                Back
              </Button>
            </DialogActions> */}
          </Dialog>
        </div>
        {/* </Link> */}
        {/* <Link to="/register"> */}
        <MenuItem onClick={handleRegisterClickOpen}>Register</MenuItem>

        <div>
          <Dialog
            open={openRegister}
            onClose={handleRegisterClickClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            {/* <DialogTitle id="alert-dialog-title">{"Login"}</DialogTitle> */}
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <Register />
              </DialogContentText>
            </DialogContent>
            {/* <DialogActions>
              <Button onClick={handleClickClose} color="primary">
                Login
              </Button>
              <Button onClick={handleClickClose} color="primary" autoFocus>
                Back
              </Button>
            </DialogActions> */}
          </Dialog>
        </div>
        {/* </Link> */}
        <Link to="/accountinfo">
          <MenuItem onClick={handleRegisterClickClose}>My account</MenuItem>
        </Link>
        <Link to="/items">
          <MenuItem onClick={handleRegisterClickClose}>Logout</MenuItem>
        </Link>

        <Link to="/newitem">
          <MenuItem onClick={handleRegisterClickClose}>New Item</MenuItem>
        </Link>

        <Link to="/myItems">
          <MenuItem onClick={handleRegisterClickClose}>My Items</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
