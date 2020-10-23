import React from "react";
import "./MyItem.css";

import { AvatarImg } from "../Avatar/Avatar";

const MyItem = () => {
  
  return (
    <div className="myitemcss">
        <div className="row">
            <div className="col-lg-1"><AvatarImg size="avatar__small" /></div>
            <div className="col-lg-8 column">
                <div className="row-lg-6">Atsuktuvas</div>
                <div className="row-lg-6">Daikto Id: 69420</div>
            </div>
            <div className="col-lg-3">
                <button>SetActive</button>
                <button>Edit</button>
            </div>
        </div>
    </div>
  );
};

export default MyItem;
