import React from "react";
import "./ChatHeader.css";
import { AvatarImg } from "../../Avatar/Avatar";

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h5>
          {/* <span className="chatHeader__hash"> */}
            <AvatarImg />
          {/* </span> */}
          {channelName}
        </h5>
      </div>
    </div>
  );
}

export default ChatHeader;
