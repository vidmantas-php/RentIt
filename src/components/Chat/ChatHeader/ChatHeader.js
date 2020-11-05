import React from "react";
import "./ChatHeader.css";
import { AvatarImg } from "../../Avatar/Avatar";

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h5>
          {/* <span className="chatHeader__hash"> */}
            <AvatarImg image="https://gwbcenter.imgix.net/Exhibits_and_Events/Events/2019/ForumOnLeadership/bill-gates-headshot.jpg?w=200&h=200&fit=facearea&faceindex=1&facepad=3&mask=ellipse&fm=png" />
          {/* </span> */}
          {channelName}
        </h5>
      </div>
    </div>
  );
}

export default ChatHeader;
