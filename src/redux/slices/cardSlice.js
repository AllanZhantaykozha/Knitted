import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addItemsToCard(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addItemsToCard } = cardSlice.actions;

export default cardSlice.reducer;
