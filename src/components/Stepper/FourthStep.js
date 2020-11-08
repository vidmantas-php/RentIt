import React from "react";
import TipsComponent from "./TipsComponent";
import TextField from "@material-ui/core/TextField";

export default () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="tips__width ml-5 mr-5">
        <h4 className="m-2">Set your rental price</h4>
        <div className="mt-2 d-flex">
          <TextField
            id="outlined-number"
            label="Daily"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="m-2 background__color__forms"
          />
          <TextField
            id="outlined-number"
            label="Weekly"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="m-2 background__color__forms"
          />
          <TextField
            id="outlined-number"
            label="Monthly  "
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            className="m-2 background__color__forms"
          />
        </div>
        <h4 className="m-2">Item location</h4>
        <TextField
            required
            id="outlined-required"
            label="Address"
            defaultValue=""
            variant="outlined"
            className="background__color__forms width__select"
          />
      </div>
      <TipsComponent
        MainInfoH2="Top tips:"
        firstTipStrong="1. Weekly & monthly pricing "
        firstTipP="Add weekly and monthly prices to generate longer rentals and higher overall lender income."
        secondTipStrong="2. Location"
        secondTipP="We won't display your exact location, just a rough indication."
      />
    </div>
  );
};
