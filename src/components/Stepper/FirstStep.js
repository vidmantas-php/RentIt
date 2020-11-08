import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./Steps.css";
import TipsComponent from "./TipsComponent";

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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className="d-flex justify-content-center">
        <div className="d-flex flex-column">
          <h4>What's the item?</h4>
          <TextField
            required
            id="outlined-required"
            label="Item Name"
            defaultValue=""
            variant="outlined"
            className="background__color__forms"
          />
          <h4>Add some photos</h4>
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
                <CardContent className="text-center">
                  <img
                    src="https://i7.uihere.com/icons/258/694/503/picture-add-87b731e3ad0022412047e14cb6a3f7e5.png"
                    className="img__width"
                    alt=""
                  ></img>
                  <p>Click Here to add image</p>
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
        </div>
        <TipsComponent
          MainInfoH2="Image tips:"
          firstTipStrong="1. Landscape's best "
          firstTipP="Make sure you photograph the actual item (don't use stock images).
          People are more likely to request if they can see what they will
          actually be getting"
          secondTipStrong="2. Avoid stock images"
          secondTipP="People like seeing the actual item they’re getting"
          thirdTipStrong="3. Pick a strong cover photo "
          thirdTipP="Once uploaded, just drag images to reorder"
        />
      </div>
    </form>
  );
};
