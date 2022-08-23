import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    isLoading: false,
    cards: [],
  },
  reducers: {
    startShake: (state) => ({
      isLoading: true,
      cards: state.cards,
    }),
    addCards: (state, { payload }) => ({
      isLoading: false,
      cards: [...payload, ...state.cards],
    }),
    deleteCards: () => this.initialState,
  },
});

export const { addCards, deleteCards, startShake } = cardsSlice.actions;

export default cardsSlice.reducer;
