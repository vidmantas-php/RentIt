import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
import "../../../MainPage.css";

function Message({ timestamp, user, message }) {
  return (
    <div className="message">
      <div className="message__info">
        <span className="message__timestamp d-flex justify-content-center">
          {new Date(timestamp?.toDate()).toUTCString()}
        </span>
        <p className="margin__left__4rem padding__0 message__font__size__12px">
          {user.displayName}
        </p>
        <div className="d-flex align-items-center">
          <Avatar src={user.photo} className="avatar__size"/>
          <p className="message__background message__border__radius">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
