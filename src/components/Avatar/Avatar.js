import React from "react";
import "./Avatar.css";

const SIZES = ["avatar__small", "avatar__large"];

export const AvatarImg = ({ size }) => {
  const checkAvatarSize = SIZES.includes(size) ? size : SIZES[0];

  return (
    <div className="avatar__img">
      <img
        alt="Bill Gates"
        src="https://gwbcenter.imgix.net/Exhibits_and_Events/Events/2019/ForumOnLeadership/bill-gates-headshot.jpg?w=200&h=200&fit=facearea&faceindex=1&facepad=3&mask=ellipse&fm=png"
        className={checkAvatarSize}
      />
    </div>
  );
};
