import React from "react";
import { Typography } from "@material-ui/core";
import {
  removeFavoritesItem,
  selectFavorites,
} from "../../features/favorites/FavoritesSlice";
import { useSelector, useDispatch } from "react-redux";
import "../../MainPage.css";
import "./Favorites.css";
import Card from "../../components/Cards/Card/Card";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Favorites = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFavorites);

  return (
    <div className="margin__right__and__left__10rem">
      <Typography
        className="text-center"
        component="h2"
        variant="h6"
        color="primary"
        gutterBottom
      >
        Favorites
      </Typography>
      <Typography className="text-center" component="p" variant="body1">
        You have {products.filter((product) => product.added).length} items in
        your favorites
      </Typography>
      <div className="display__flex">
        <div className="container-fluid">
          <div className="eilute">
            {products
              .filter((product) => product.added)
              .map((product) => (
                <div className="kazkas">
                  <Card
                    key={product.id}
                    imgsrc={product.imgsrc}
                    title={product.title}
                    itemValue={product.itemValue}
                    city={product.city}
                    redirect={product.redirect}
                    onClickCard={() => dispatch(removeFavoritesItem(product))}
                    favIcon={<FavoriteIcon className="favorites__red" />}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Favorites };
