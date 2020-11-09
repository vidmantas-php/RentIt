import React from "react";
import { AvatarImg } from "../../../components/Avatar/Avatar";
import { Button, TextField } from "@material-ui/core";
import "./EditMyAccount.css";

export default ({ photo, userName, userEmail, userCity, userPhone }) => {
  return (
    <div>
      <div className="containerProfile">
        <div id="top" className="p-3 text-center">
          <h4>Edit your profile</h4>
        </div>
        <div id="sidebar">
          {" "}
          <div className="p-3 d-flex flex-column text-center">
            <div className="mb-3">
              <AvatarImg size="avatar__large" image={photo} />
            </div>
            <Button className="button__width__max__content" variant="outlined">
              Change photo
            </Button>
          </div>
        </div>
        <div
          id="content1"
          className="ml-5 d-flex flex-column justify-content-around"
        >
          <strong>Name: </strong>
          <strong>Email: </strong>
          <strong>City: </strong>
          <strong>Phone: </strong>
        </div>
        <div id="content2">
          {" "}
          <TextField
            required
            id="outlined-required"
            label="Name"
            defaultValue={userName}
            variant="outlined"
            className="m-2"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue={userEmail}
            variant="outlined"
            className="m-2"
          />
          <TextField
            required
            id="outlined-required"
            label="City"
            defaultValue={userCity}
            variant="outlined"
            className="m-2"
          />
          <TextField
            required
            id="outlined-required"
            label="Phone"
            defaultValue={userPhone}
            variant="outlined"
            className="m-2"
          />
        </div>
        <div id="footer" className="ml-5 m-2">
          {" "}
          <Button
            className="m-2"
            variant="contained"
            color="secondary"
            buttonStyle="btn--danger--solid"
          >
            Back
          </Button>
          <Button className="m-2" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
