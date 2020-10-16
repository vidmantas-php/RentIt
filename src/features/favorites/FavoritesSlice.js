import { createSlice } from '@reduxjs/toolkit';

let nextItemId = 0;

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    // item: ["Paspirtukas"],
    value: [
                /*{
            id: 1,
            name: 'ebook'
        }*/
    ],
  },
  reducers: {
    // increment: (state, action) => {

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

    //   state.value = [...state.value, action.payload.item]
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },

    create: {
        reducer(state, { payload }) {
            const { id, name: cartItemName } = payload
            state.push({ id, name: cartItemName })
        },
        prepare(cartItemName) {
            return {
                payload: {
                    name: cartItemName,
                    id: nextItemId++
                }
            }
        }
    }
  },
});


const { actions, reducer } = favoritesSlice

// export const { increment, decrement } = favoritesSlice.actions;

export const { create } = actions
export default reducer

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// export const selectFavorites = state => state.favorites.value;

// export default favoritesSlice.reducer;
