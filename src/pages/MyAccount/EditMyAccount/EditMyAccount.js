import React from "react";
import { AvatarImg } from "../../../components/Avatar/Avatar";
import { Button, TextField } from "@material-ui/core";
import "./EditMyAccount.css";

export default ({ photo, userName, userEmail, userCity, userPhone }) => {
  return (
    <div>
      <div>
        <h4>Edit your profile</h4>
      </div>
      <div className="container">
        <div><h4>Edit your profile</h4></div>
        <div>Main</div>
        <div id="sidebar"></div>
        <div id="content1"></div>
        <div id="content2"></div>
        <div id="content3"></div>
        <div>footer</div>
      </div>
      {/* <div className="d-flex mt-5">
        <div className="p-3 d-flex flex-column">
          <div className="mb-3">
            <AvatarImg size="avatar__large" image={photo} />
          </div>
          <Button className="button__width__max__content" variant="outlined">
            Change photo
          </Button>
        </div>
        <div className="container">
          <div>
            <div className="d-flex align-items-center">
              <p className="mr-4">
                <strong>Name: </strong>
              </p>
              <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue={userName}
                variant="outlined"
                className="m-2"
              />
            </div>
            <div className="d-flex align-items-center">
              <p className="mr-4">
                <strong>Email: </strong>
              </p>
              <TextField
                required
                id="outlined-required"
                label="Email"
                defaultValue={userEmail}
                variant="outlined"
                className="m-2"
              />
            </div>
            <div className="d-flex align-items-center">
              <p className="mr-4">
                <strong>City: </strong>
              </p>
              <TextField
                required
                id="outlined-required"
                label="City"
                defaultValue={userCity}
                variant="outlined"
                className="m-2"
              />
            </div>
            <div className="d-flex align-items-center">
              <p className="mr-4">
                <strong>Phone: </strong>
              </p>
              <TextField
                required
                id="outlined-required"
                label="Phone"
                defaultValue={userPhone}
                variant="outlined"
                className="m-2"
              />
            </div>
            <div className="d-flex justify-content-center">
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
      </div> */}
    </div>
  );
};
