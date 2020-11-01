import React from 'react';
import  Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import "../../MainPage.css";

export default function SimpleRating() {
  const [value, setValue] = React.useState(5);

  return (
      <Box className="margin__bottom" component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </Box>
  )}