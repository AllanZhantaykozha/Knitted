import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'Свитер',
};

const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    changeSelect(state, action) {
      state.type = action.payload;
    },
  },
});

export const { changeSelect } = selectSlice.actions;

export default selectSlice.reducer;
