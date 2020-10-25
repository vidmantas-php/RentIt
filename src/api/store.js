import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favorites/FavoritesSlice';
import userReducer from '../features/user/userSlice';
import appReducer from "../features/app/appSlice";

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    user: userReducer,
    app: appReducer,
  },
});
