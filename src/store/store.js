import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import cardsReducer from '@/store/reducers/cards';
import { root } from '@/store/sagas/cardsSaga';

const sagaMiddleWare = createSagaMiddleware();

export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(root);