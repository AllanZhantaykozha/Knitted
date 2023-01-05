import { configureStore } from '@reduxjs/toolkit';

import items from './slices/itemsSlice';
import select from './slices/selectSlice';
import card from './slices/cardSlice';

export const store = configureStore({
  reducer: {
    items,
    select,
    card,
  },
});
