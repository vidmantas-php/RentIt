import React from "react";
import "./Card.css";
import { AvatarImg } from "../Avatar/Avatar";
// import { Slider } from "../Carousel/Slider";

const Card = (props) => {
  function over(e) {
    e.currentTarget.hover = "none";
  }
  function out(e) {
    e.currentTarget.hover = "hover";
  }
  // return <img src={props.normalImage} onMouseOver={over} onMouseOut={out} />;

  return (
    <div>
      <a href={props.redirect} style={{ textDecoration: "none" }}>
        <div className="card shadow">
          <div className="overflow">
            <img
              src={props.imgsrc}
              onMouseOver={over}
              onMouseOut={out}
              className="card-img-top"
              alt=""
            ></img>
            {/* <Slider
              first={props.imgsrc}
              second="https://images.creativemarket.com/0.1.0/ps/7838714/300/200/m2/fpc/wm0/drzwoeyoucywok6vcgrgwkykzsgmenfi0sedfjehkl9mxmi9xt9hces0natgpjeh-.jpg?1582893209&s=4cdc78af9fdd6367ff2da340a6632732"
              hover=""
              className="card-img-top"
              onMouseOver={over}
              onMouseOut={out}
            /> */}
          </div>
          <div className="avatar">
            <div className="text-dark">
              <h4 className="card-title">{props.title}</h4>
              <p className="card-text text-secondary">
                {props.itemValue} eur/para
              </p>
              <p className="card-text text-secondary">{props.city}</p>
            </div>
            <div>
              <AvatarImg size="avatar__small" />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

// function changeBackground(e) {
//   e.target.style.background = "red";
// }

// return (
//   <div className="App">
//     <button onMouseOver={changeBackground}>Hover over me!</button>
//   </div>
// );

export default Card;
