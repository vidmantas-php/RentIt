import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./NewItem.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="form__center">
        <h2 className="padding__2">New Item</h2>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Item Name"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Category"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="City"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Price"
          type="number"
          defaultValue="0"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
    </form>
  );
}
