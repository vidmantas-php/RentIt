import React from "react";
import "./Avatar.css";

const SIZES = ["avatar__small", "avatar__large"];

export const AvatarImg = ({ size, image }) => {
  const checkAvatarSize = SIZES.includes(size) ? size : SIZES[0];

  return (
    <div className="avatar__img">
      <img
        alt="Bill Gates"
        src={image}
        className={`border__radius__50 ${checkAvatarSize}`}
      />
    </div>
  );
};
