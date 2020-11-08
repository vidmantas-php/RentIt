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
              <AvatarImg size="avatar__small" image="https://gwbcenter.imgix.net/Exhibits_and_Events/Events/2019/ForumOnLeadership/bill-gates-headshot.jpg?w=200&h=200&fit=facearea&faceindex=1&facepad=3&mask=ellipse&fm=png" />
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
  );
};

export default Card;
