import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: [],
    reducers: {
      startShake: (state) => state,
      addCards: (state, action) => [...action.payload, ...state],
      deleteCards: () => initialState,
    }
  })

export const { addCards, deleteCards, startShake } = cardsSlice.actions

export default cardsSlice.reducer