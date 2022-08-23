import { createSlice } from '@reduxjs/toolkit';

export const initialBalance = 55;

export const balanceSlice = createSlice({
  name: 'balance',
  initialState: 0,
  reducers: {
    initialize: (state, { payload }) => payload,
    updateBalance: (state, { payload }) => payload,
    add: (state) => state,
    subtract: (state) => state,
  },
});

export const {
  add, subtract, initialize, updateBalance,
} = balanceSlice.actions;

export default balanceSlice.reducer;
