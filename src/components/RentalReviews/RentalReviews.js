import React from "react";
import { AvatarImg } from "../Avatar/Avatar";
import StarRating from "../StarRating/StarRating";
// import "../../MainPage.css";
import "./RentalReviews.css";

function RentalReviews() {
  return (
      <div className="margin__16px__padding__2rem__height">
        <div className="display__flex">
            <div>
                <AvatarImg image="https://gwbcenter.imgix.net/Exhibits_and_Events/Events/2019/ForumOnLeadership/bill-gates-headshot.jpg?w=200&h=200&fit=facearea&faceindex=1&facepad=3&mask=ellipse&fm=png"/>
            </div>
            <div className="margin__left__3percent">
                <div className="display__flex">
                    <h5>Bill</h5><h5>, New York</h5>
                </div>
                <div>
                    <StarRating />
                </div>
            </div>
        </div>
        <div>
            <p>
            Mario was a super nice, chilled out guy and his gear was perfect for my project. Highly recommend.
            </p>
        </div>
      </div>
  );
}

export default RentalReviews;
