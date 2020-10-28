import { createSlice } from "@reduxjs/toolkit";
import {items} from "../../_DATA";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: items,
  reducers: {
    addToFavorites: (state, action) => {
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item
          }
  
          return {
            ...item,
            added: true
          }
        })
      },
    removeFavoritesItem(state, action) {
        return state.map(item => {
          if (item.id !== action.payload.id) {
            return item
          }
  
          return {
            ...item,
            added: false
          }
        })
      }
  },
});

export const { addToFavorites, clearFavorites, removeFavoritesItem } = favoritesSlice.actions;

export const selectFavorites = state => state.favorites;


export default favoritesSlice.reducer;
