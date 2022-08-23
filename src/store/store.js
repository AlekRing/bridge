import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import cardsReducer from '@/store/reducers/cards';
import balanceReducer from '@/store/reducers/balance';
import rootSagas from '@/store/sagas';

const sagaMiddleWare = createSagaMiddleware();

export default configureStore({
  reducer: {
    cards: cardsReducer,
    balance: balanceReducer,
  },
  middleware: [sagaMiddleWare],
});

rootSagas.map(sagaMiddleWare.run);
