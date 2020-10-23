import React from "react";
import "./ItemPage.css";
import { Button } from "../../components/Buttons/Button/Button";
// import { AppContext } from "../../App";
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
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
// import { useParams } from "react-router-dom";
// import { items } from "../../_DATA";

export default () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // const { favorites, setFavorites } = useContext(AppContext);

  // const addToFavorites = () => {
  //   setFavorites(favorites + 1);
  // };
  // const { id } = useParams();

  // const sortedItem = items.map((todo) => <li key={todo.id}>{todo.text}</li>);

  return (
    <div>
      {/* {items.map((item) => { if (item.id === id) { */}

      
        <div className="item__page">
          <div className="item__info">
            <h2 className="text-center padding-2-rem">El. Paspirtukas</h2>
            <div className="product-center">
              <div className="center-flex">
                <img
                  src="https://images.creativemarket.com/0.1.0/ps/7219151/300/200/m2/fpc/wm0/t5nk3muqwpf5pcd5rrgicears5kw3c0oshvlespkdh05fhftkkzlt4vs05j82ts2-.jpg?1572428562&s=209474640e9993046a57673177887050"
                  alt="Very beautiful product"
                  className="img-height-width"
                />
              </div>
              <div>
                <p className="text-center padding-2-rem">
                  <strong>Price: 10$</strong>
                  <IconButton>
                    <Badge
                    // badgeContent={favorites && favorites.length}
                    >
                      <FavoriteBorderIcon />
                    </Badge>
                  </IconButton>
                </p>
                <p>
                  <strong>Description</strong>: Was certainty remaining
                  engrossed applauded sir how discovery. Settled opinion how
                  enjoyed greater joy adapted too shy. Now properly surprise
                  expenses interest nor replying she she. Bore tall nay many
                  many time yet less. Doubtful for answered one fat indulged
                  margaret sir shutters together. Ladies so in wholly around
                  whence in at. Warmth he up giving oppose if. Impossible is
                  dissimilar entreaties oh on terminated. Earnest studied
                  article country ten respect showing had. But required offering
                  him elegance son improved informed.{" "}
                </p>
                <div className="center-flex">
                  <Button variant="contained" type="submit">
                    {" "}
                    Delete{" "}
                  </Button>
                  <Button variant="contained" type="submit">
                    {" "}
                    Update{" "}
                  </Button>
                  <Button variant="contained" type="submit">
                    {" "}
                    Rent It{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="item__user__info">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <h2 className="padding-2-rem">Pasirink</h2>
              <Grid container justify="space-around">
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
            <div className="padding-2-rem">
              <div className="container__width">
                <AvatarImg size="avatar__large" />
              </div>
              <div>
                <h6 className="text-center padding-1-rem avatar__margin__bottom__0">
                  Bill Gates
                </h6>
              </div>
              <div className="center-flex">
                <StarRating />
              </div>
            </div>
          </div>
        </div>
{/* }})} */}
      ,
    </div>
  );
};