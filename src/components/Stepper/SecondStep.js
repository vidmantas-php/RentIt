import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { FormControl, InputLabel } from "@material-ui/core";


export default () => {
  const [setPricePerDay] = React.useState("");

  const handleChangePricePerDay = (event) => {
    setPricePerDay(event.target.value);
  };
  return (
    <div className="d-flex flex-column">
      <div>
        <FormControl
          className="width__select background__color__forms text-center"
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-amount">
            Price per day
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
      <div>
        <FormControl
          className="width__select background__color__forms text-center"
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
    </div>
  );
};
