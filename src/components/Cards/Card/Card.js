import React from "react";
import "./Card.css";
import { AvatarImg } from "../../Avatar/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "../../../MainPage.css"

const Card = (props) => {
  function over(e) {
    e.currentTarget.hover = "none";
  }
  function out(e) {
    e.currentTarget.hover = "hover";
  }

  return (
    <div>
      <div>
        <div className="card shadow card__width">
          <Link to={props.redirect} style={{ textDecoration: "none" }}>
            <div className="overflow">
              <img
                src={props.imgsrc}
                onMouseOver={over}
                onMouseOut={out}
                className="card-img-top card__img__height"
                alt=""
              ></img>
            </div>
          </Link>
          <div className="avatar">
            <Link to={props.redirect} style={{ textDecoration: "none" }}>
              <div className="text-dark">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-secondary">
                  {props.itemValue} eur/para
                </p>
                <p className="card-text text-secondary">{props.city}</p>
              </div>
            </Link>
            <div>
              <AvatarImg size="avatar__small" />
              <IconButton
                color="inherit"
                variant="outlined"
                onClick={props.onClickCard}
                style={{outline: 'none'}}
              >
                {props.favIcon}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
