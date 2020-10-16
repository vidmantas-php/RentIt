import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favorites/FavoritesSlice';

export default configureStore({
  reducer: {
    favorites: favoritesReducer
  },
});
