import React from "react";
import { AvatarImg } from "../../components/Avatar/Avatar";
import StarRating from "../../components/StarRating/StarRating";
import "../../MainPage.css";
import Tabs from "./Tabs/Tabs";
import "./MyAccount.css";
import { Button } from "@material-ui/core";

export default () => {

  return (
    <div className="display__flex">
      <div id="MyAccount" className="margin__left__5proc">
        <div className="">
          <div className="">
            <div className="margin__1rem">
              <AvatarImg size="avatar__large" />
            </div>
            <div>
              <div>
                <p>
                  <strong>Name: </strong>Bill Gates
                </p>
                <p>
                  <strong>Email: </strong>BillyGates@gmail.com
                </p>
                <p>
                  <strong>City: </strong>Vilnius
                </p>
                <p>
                  <strong>Phone: </strong>860552314
                </p>
                <p className="display__flex">
                  <strong>Rating: </strong>
                  <StarRating className="margin__bottom" /> (10)
                </p>
              </div>
              <div>
                <Button variant="outlined">Edit profile</Button>
              </div>
            </div>
          </div>

          <div>
            <div className="">
              <p>
                <strong>Your bio: </strong>
              </p>
            </div>
            <div className="my__bio margin__bottom__1rem">
              <p>Selling apples</p>
            </div>
          </div>
        </div>
      </div>

      <div className="account__info margin__2rem">
        <Tabs />
      </div>
    </div>
  );
};