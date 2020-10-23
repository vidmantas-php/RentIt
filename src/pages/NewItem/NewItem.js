import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./NewItem.css";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Button } from "../../components/Buttons/Button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    display: "none",
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [setPricePerDay] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChangePricePerDay = (event) => {
    setPricePerDay(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="form__center">
        <h2 className="padding__2">New Item</h2>
        <FormControl
          variant="outlined"
          className="width__select background__color__forms"
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Category
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={category}
            onChange={handleChange}
            label="Category"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Automobiliai">Automobiliai</MenuItem>
            <MenuItem value="Elektronika">Elektronika</MenuItem>
            <MenuItem value="Laisvalaikis">Laisvalaikis</MenuItem>
          </Select>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Item Name"
          defaultValue=""
          variant="outlined"
          className="background__color__forms"
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="outlined"
          className="background__color__forms"
        />

        <a href="#image">
          <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Card variant="outlined" className="width__select">
              <CardContent>
                Picture
                <img
                  src="https://i7.uihere.com/icons/258/694/503/picture-add-87b731e3ad0022412047e14cb6a3f7e5.png"
                  className="img__width"
                  alt=""
                ></img>
                Click Here to add image
              </CardContent>
            </Card>
          </label>
          <input
            accept="image/*"
            className={classes.input}
            id="icon-button-file"
            type="file"
          />
        </a>
        {/* <a href="#image">
          <Card variant="outlined" className="width__select">
            <CardContent>
              Picture
              <img
                src="https://i7.uihere.com/icons/258/694/503/picture-add-87b731e3ad0022412047e14cb6a3f7e5.png"
                className="img__width"
                alt=""
              ></img>
              Click Here to add image
            </CardContent>
          </Card>
        </a> */}
        <FormControl
          className="width__select background__color__forms"
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
        <TextField
          required
          id="outlined-required"
          label="City"
          defaultValue=""
          variant="outlined"
          className="background__color__forms"
        />
        <div className="center-flex">
          <Button variant="contained" type="submit">
            {" "}
            Create{" "}
          </Button>
        </div>
      </div>
    </form>
  );
}
