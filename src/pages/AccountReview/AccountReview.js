import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import UserReview from "../../components/UserReview/UserReview";
import { AvatarImg } from "../../components/Avatar/Avatar";
import StarRating from "../../components/StarRating/StarRating";
// import "./components/SortByBtn/dropbtn.css";
import SortByBtn from "../../components/SortByButton/SortByButton";
import ItemCard from "../../components/Card/Card";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./AccountReview.css";

export default () => {
  function Cards() {
    return (
      <React.Fragment>
        {/* {isLoading ? (
              <Loading className="loading loading-page" />
            ) : (
              items.map((item) => ( */}
        <div>
          <div className="col-md-4">
            <ItemCard
              // key={item.id}
              imgsrc="https://images.creativemarket.com/0.1.0/ps/7219151/300/200/m2/fpc/wm0/t5nk3muqwpf5pcd5rrgicears5kw3c0oshvlespkdh05fhftkkzlt4vs05j82ts2-.jpg?1572428562&s=209474640e9993046a57673177887050"
              title="Scooter"
              itemValue="26.3"
              city="Vilnius"
              redirect="/item"
            />
          </div>
        </div>
        {/* ))
            )} */}
      </React.Fragment>
    );
  }

  //   render() {
  return (
    <div id="Profile" className="container">
      {/* UPPER INFO */}
      <div className="container">
        <div className="column">
          <div className=" row row-lg-6">
            <div
              className="col-lg-5 avatar__position mt-4"
              style={{ border: "5px solid black" }}
            >
              <AvatarImg size="avatar__large" />
            </div>
            <div className="col-lg-7 mt-4">
              <p id="vvardas">Bill Gates</p>
              <p>Renting scooters</p>
            </div>
          </div>

          <div className="row row-lg-6 py-3">
            <div className="px-3">
              <button className="btn btn--primary--solid btn--medium">
                Susisiekti
              </button>
            </div>
            <div className="px-3">
              <FaMapMarkerAlt />
              <label style={lblStyle}>Vilnius</label>
            </div>
            <div className="px-3 d-none d-sm-block">
              {/* <FaStar /> */}
              <StarRating />
            </div>
          </div>
        </div>
      </div>

      {/* ITEMS DIV */}
      <div className="container">
        <label id="chaptername">Nuomojami daiktai</label>
        <div id="searchas">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon1"
            ></input>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary margin__0__rem"
                type="button"
                id="button-addon1"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div id="itemcardsbox" className="row">
          <Cards />
          <Cards />
        </div>
      </div>

      {/* REVIEWS DIV */}
      <div className="container">
        <div className="commentsinfo">
          <label id="chaptername">Atsiliepimai</label>
          <div id="reviewsname">
            <div className="row">
              <div className="col-xl-2 col-md-3 col-sm-4 d-none d-sm-block">
                102 atsiliepimai
              </div>
              <div className="col-xl-3 col-md-3 col-sm-4 col-8">
                <StarRating />
              </div>

              <div className="col-xl-7 col-md-6 col-sm-4 col-4">
                <SortByBtn />
              </div>
            </div>
          </div>
          <UserReview />
          <UserReview />
          <UserReview />
        </div>
      </div>
    </div>
  );
};
// }

const lblStyle = {
  fontWeight: "bold",
};

// export default ProfileBS;
