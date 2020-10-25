import React from "react";
import "./Ad.css";

export const Ad = ({ adImg, textFirst, textSecond }) => {
  return (
    <div className="flex__column">
      <img
        className="img__ad"
        src={adImg}
        alt=""
      />
      <div className="margin__left__right__16px">
        <p className="padding__0">{textFirst}</p>
        <span className="text__color">{textSecond}</span>
      </div>
    </div>
  );
};
