import React from "react";
import { FormControl, InputLabel } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import TipsComponent from "./TipsComponent";

export default () => {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <div>
          <h4>Pick a category</h4>
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
        </div>
        <div>
          <h4>Describe your item</h4>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue=""
            variant="outlined"
            className="background__color__forms width__select"
          />
        </div>
      </div>
      <TipsComponent
        MainInfoH2="Item detail tips:"
        firstTipStrong="1. Read our minds "
        firstTipP="Try and anticipate common questions, and include answers in your description"
        secondTipStrong="2. Don't skimp on detail"
        secondTipP="Explain what's included in the listing (and what's not), describe the condition and flag any faults."
        // thirdTipStrong="3. Pick a strong cover photo "
        // thirdTipP="Once uploaded, just drag images to reorder"
      />
    </div>
  );
};
