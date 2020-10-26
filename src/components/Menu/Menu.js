// import React, { useState } from "react";
import React from "react";
import "./Menu.css";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

export default ({ displayName }) => {
  return (
    <div>
      <div className="mainMenu">
        <div>
          <div>
            <Link to="/accountinfo">My account</Link>
            <Link to="/myItems">My Items</Link>
            <Link to="/newitem">Rent Item</Link>
            {/* <Link to="#more">
              <ExpandMoreIcon />
            </Link> */}
          </div>
          <div>
            <h5 className="name__color">Hi, {displayName}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
