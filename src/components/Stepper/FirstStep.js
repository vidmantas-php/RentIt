import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./Steps.css";

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

export default () => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="form__center">
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
        <TextField
          required
          id="outlined-required"
          label="City"
          defaultValue=""
          variant="outlined"
          className="background__color__forms"
        />
      </div>
    </form>
  );
};
