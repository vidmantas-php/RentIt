import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FormControl, InputLabel } from "@material-ui/core";
import TipsComponent from "./TipsComponent";

export default () => {
  const [setPricePerDay] = React.useState("");

  const handleChangePricePerDay = (event) => {
    setPricePerDay(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="tips__width">
        <h4 className="m-2">What’s the current value of the item?</h4>
        <p className="m-2 p-0 pt-2 pb-2 text__color__grey">
          Please set an accurate estimate — you'll only be covered for up to the
          given value if anything goes wrong.{" "}
          <a href="#readmore">Read more here</a>
        </p>
        <FormControl
          className="width__select background__color__forms"
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            Item value
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            defaultValue=""
            onChange={handleChangePricePerDay}
            startAdornment={<InputAdornment position="start">€</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
      </div>
      <TipsComponent
        MainInfoH2="Top tip:"
        firstTipStrong="This figure affects how we verify rental requests on your item. If you're not sure what your item is worth, put what you paid for it."
      />
    </div>
  );
};
