import React from "react";
import "./ItemPage.css";
import "../../MainPage.css";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { AvatarImg } from "../../components/Avatar/Avatar";
import StarRating from "../../components/StarRating/StarRating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LightboxComponent from "../../components/ImageLightbox/LightboxComponent";
import { Button } from "@material-ui/core";
// import {MyFancyComponent} from "../../components/GoogleMaps/GoogleMaps";
// import { useParams } from "react-router-dom";

export default () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="containeris px-2" style={{ border: "2px solid black" }}>
      {/* {items.map((item) => { if (item.id === id) { */}
      <div className="item__info">
        <h2 className="padding-2-rem">
          Elektrinis paspirtukas Beaster Scooter BS06BL
        </h2>
        <div>
          <div>
            <LightboxComponent />
          </div>
          <div>
            <div className="d-flex">
              <p className="margin__right">
                <h4 className="margin__bottom">$10</h4>a day
              </p>
              <p className="margin__right">
                <h4 className="margin__bottom">$70 </h4>a week
              </p>
              <p className="margin__right">
                <h4 className="margin__bottom">$200 </h4>a month
              </p>
            </div>
            <div className="margin__top__bottom">
              <Button variant="outlined" color="secondary">
                <FavoriteBorderIcon />
                Add to favorites
              </Button>
            </div>
            <div>
              <p>
                <h4>Description:</h4> Was certainty remaining engrossed
                applauded sir how discovery. Settled opinion how enjoyed greater
                joy adapted too shy. Now properly surprise expenses interest nor
                replying she she. Bore tall nay many many time yet less.
                Doubtful for answered one fat indulged margaret sir shutters
                together. Ladies so in wholly around whence in at. Warmth he up
                giving oppose if. Impossible is dissimilar entreaties oh on
                terminated. Earnest studied article country ten respect showing
                had. But required offering him elegance son improved informed.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column">
        {/* <div>
              <MyFancyComponent />
            </div> */}
        <div className="padding-2-rem d-flex flex-column align-items-center">
          <div className="container__width">
            <AvatarImg
              size="avatar__large"
              image="https://gwbcenter.imgix.net/Exhibits_and_Events/Events/2019/ForumOnLeadership/bill-gates-headshot.jpg?w=200&h=200&fit=facearea&faceindex=1&facepad=3&mask=ellipse&fm=png"
            />
          </div>
          <div>
            <h6 className="padding-1-rem avatar__margin__bottom__0">
              Bill Gates
            </h6>
          </div>
          <div>
            <StarRating />
          </div>
        </div>
        <div>
          <h4>$10 per day</h4>
          <p className="padding__0 color__grey__like">Minimum 3 days rental</p>

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className="d-flex flex-column">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Nuoma nuo"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Nuoma iki"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
        <div className="margin__top__bottom text-center">
          <Button variant="outlined">Request to rent</Button>
        </div>
      </div>
    </div>
  );
};
