import React from "react";
import "./Avatar.css";

const SIZES = ["avatar__small", "avatar__large"];

export const AvatarImg = ({ size }) => {
  const checkAvatarSize = SIZES.includes(size) ? size : SIZES[0];

  return (
    <div className="avatar__img">
      <img
        alt="Bill Gates"
        src="https://www.theafricareport.com/media/2020/04/billgatesal-jpg-288295-original.jpg"
        className={checkAvatarSize}
      />
    </div>
  );
};
