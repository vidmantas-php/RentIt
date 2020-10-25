import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
import "../../../MainPage.css";

function Message({ timestamp, user, message }) {
  return (
    <div className="message">
      <div className="message__info">
        <span className="message__timestamp display__flex justify__content__center">
          {new Date(timestamp?.toDate()).toUTCString()}
        </span>
        <p className="margin__left__4rem padding__0">
          {user.displayName}
          {/* <span className="message__timestamp">
                    {new Date(timestamp?.toDate()).toUTCString()}
                    </span> */}
        </p>
        <div className="display__flex align__all__items__center">
          <Avatar src={user.photo} />
          <p className="message__background message__border__radius">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
