import React from "react";
import "./Avatar.css";

const SIZES = ["avatar__small", "avatar__large"];

export const AvatarImg = ({ size }) => {

  const checkAvatarSize = SIZES.includes(size) ? size : SIZES[0];

  return (
    <div className="avatar__img">
      <img
        alt="Bill Gates"
        src="https://www.evoke.org/-/media/Images/Evoke/Contributors/BillGates/BillGates_Headshot.ashx?rev=7e39f3afbe07407a8d79b25ff833ba66"
        className={checkAvatarSize}
      />
    </div>
  );
};
