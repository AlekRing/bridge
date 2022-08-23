export const selectFirstCard = (state) => state.cards?.cards?.[0];
export const selectSecondCard = (state) => state.cards?.cards?.[1];
export const selectIsLoading = (state) => state.cards?.isLoading;
export const selectBalance = (state) => state.balance;
