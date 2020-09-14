import React from "react";
import StarRating from "../../components/StarRating/StarRating";
import { AvatarImg } from "../../components/Avatar/Avatar";
import "./UserReview.css";

export default () => {
  return (
    <div className="container UserReview">
      <div className="column">
        <div className="row row-lg-2">
          <div className="col-lg-1 col-md-2 d-none d-md-block">
            <AvatarImg size="avatar__large" />
          </div>
          <div className="column col-lg-11 col-md-10">
            <div className="row row-lg-6">
              <div className="col-lg-10 col-md-9">Igor</div>
              <div className="col-lg-2 col-md-3" style={{ fontSize: "1rem" }}>
                2020-05-09
              </div>
            </div>
            <div className="row-lg-6">
              <StarRating />
            </div>
          </div>
        </div>
        <div className="row-lg-10" style={{ paddingTop: "1rem" }}>
          <p>
            "The item was wonderfull, looking forward to take something else
            from this renter"
          </p>
        </div>
      </div>
    </div>
  );
};
