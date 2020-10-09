import React from "react";
import "./FavoritesButton.css";
import "../../MainPage.css";
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import { AppContext } from "../../App";
import IconButton from "@material-ui/core/IconButton";

export const FavoritesButton = () => {
  // const { favorites } = useContext(AppContext);

  return (
    <IconButton>
      <Badge
        // badgeContent={favorites && favorites.length}
        badgeContent="4"
        color="secondary"
      >
        <FavoriteIcon className="color__set__white" />
      </Badge>
    </IconButton>
  );
};
