import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ReviewRating.css";
import StarRating from "./starrating/StarRating";

class ReviewRating extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div id="topname">Palikite atsiliepima</div>
        <div className="column">
          <div className="row-2">Owner/ UserName</div>
          <div className="row-2">Info</div>
          <div className="row-2">Info</div>
          <div className="row-2">Item Name</div>
          <div className="row-2">Rental Date</div>
          <div className="row-2">Price</div>
        </div>
        <div>
          Rating
          <StarRating />
        </div>
        <div>
          <input type="text" />
        </div>
        <button type="button" className="btn btn-outline-primary">
          Primary
        </button>
      </div>
    );
  }
}

export default ReviewRating;
