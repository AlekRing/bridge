import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import cardsReducer from '@/store/reducers/cards';
import balanceReducer from '@/store/reducers/balance';
import { root } from '@/store/sagas/cardsSaga';

const sagaMiddleWare = createSagaMiddleware();

export default configureStore({
  reducer: {
    cards: cardsReducer,
    balance: balanceReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(root);