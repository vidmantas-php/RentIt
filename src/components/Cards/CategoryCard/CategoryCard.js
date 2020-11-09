import React from "react";
import "./CategoryCard.css";

export const CategoryCard = ({ categoryImage, categoryName, redirect }) => {
  return (
    <a href={redirect} style={{ textDecoration: "none" }} className="m-2 category__card__width">
      <div>
        <img src={categoryImage} className="card-img-top border__radius__50proc" alt={categoryName} />
        <div className="text-center">
          <h5 className="text__color__black text__font">{categoryName}</h5>
        </div>
      </div>
    </a>
  );
};
