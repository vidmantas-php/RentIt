import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

export default () => {
  const classes = useStyles();

  return (
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
  );
};
