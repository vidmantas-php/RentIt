import React from "react"
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  // Avatar,
  Typography
} from "@material-ui/core"
import {
    removeFavoritesItem,
    selectFavorites,
  } from "../../features/favorites/FavoritesSlice";
import DeleteIcon from "@material-ui/icons/Delete"
import { useSelector, useDispatch } from 'react-redux';
import "../../MainPage.css";
import "./Favorites.css";

// import { ProductItem } from "../global"
// import { store, remove } from "../store"

const Favorites = () => {
    // const products = items;
    const dispatch = useDispatch();
  const products = useSelector(selectFavorites)

  return (
    <div className="margin__right__and__left__10rem">
      <Typography className="text-center" component="h2" variant="h6" color="primary" gutterBottom>
        Favorites
      </Typography>
      <Typography className="text-center" component="p" variant="body1">
        You have {products.filter(product => product.added).length} items in your favorites
      </Typography>
      <List>
        {products
          .filter(product => product.added)
          .map((product) => (
            <React.Fragment key={product.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <img className="favorites__img__size" alt="Product" src={product.imgsrc} />
                </ListItemAvatar>
                <ListItemText
                  primary={product.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        color="textPrimary"
                      >
                        &euro;{(product.price / 100).toFixed(2)}
                      </Typography>
                      {` — ${product.description}`}
                    </React.Fragment>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(removeFavoritesItem({ id: product.id }))}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        {/* <ListItem>
          <Typography variant="subtitle1">
            &pound;
            {(
              products
                .filter(product => product.added)
                .reduce((acc, current) => (acc += current.price), 0) / 100
            ).toFixed(2)}
          </Typography>
        </ListItem> */}
      </List>
    </div>
  )
}

export { Favorites }
