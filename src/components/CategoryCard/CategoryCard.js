import React from 'react'
import "./CategoryCard.css";

export const CategoryCard = ({
  categoryImage,
  categoryName,
  redirect,
}) => {
    return (
      <a href={redirect} style={{ textDecoration: "none" }}>
<div className="card category__card__width__margin">
<img src={categoryImage} className="card-img-top" alt={categoryName}/>
  <div>
    <p className="card-text text-center">{categoryName}</p>
  </div>
</div>
</a>
    )
};