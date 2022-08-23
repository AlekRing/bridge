import { createSlice } from '@reduxjs/toolkit'

export const balanceSlice = createSlice({
    name: 'balance',
    initialState: 0,
    reducers: {
      add: (state, {payload}) => state + payload,
      subtract: (state, {payload}) => state - payload,
    }
  })

export const { add, subtract } = balanceSlice.actions

export default balanceSlice.reducer