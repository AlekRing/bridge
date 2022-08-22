import { createSlice } from '@reduxjs/toolkit'

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
      cards: []
    },
    reducers: {
      startShake: (state) => state,
      addCards: (state, action) => [...action.payload, ...state.cards],
      deleteCards: () => initialState,
    }
  })

export const { addCards, deleteCards, startShake } = cardsSlice.actions

export default cardsSlice.reducer