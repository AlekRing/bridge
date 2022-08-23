import { fork, put, takeEvery } from 'redux-saga/effects';
import {
  add, initialBalance, initialize, subtract, updateBalance,
} from '../reducers/balance';

function* initializeBalance() {
  const balance = localStorage.getItem('balance');

  if (balance === undefined || balance === null) {
    localStorage.setItem('balance', initialBalance);
    yield put(initialize(initialBalance));
  }
  yield put(initialize(Number(balance)));
}

function* subtractBalance({ payload }) {
  try {
    const balance = localStorage.getItem('balance');

    const newBalance = Number(balance) - payload > 0 ? Number(balance) - payload : 0;
    localStorage.setItem('balance', newBalance);
    yield put(updateBalance(newBalance));
  } catch (error) {
    console.error('Failed subtract (-) balance: ', error);
  }
}

function* addBalance({ payload }) {
  try {
    const balance = localStorage.getItem('balance');

    const newBalance = Number(balance) + payload;
    localStorage.setItem('balance', newBalance);
    yield put(updateBalance(newBalance));
  } catch (error) {
    console.error('Failed add (+) balance: ', error);
  }
}

export default function* rootBalance() {
  yield fork(initializeBalance);
  yield takeEvery(add, addBalance);
  yield takeEvery(subtract, subtractBalance);
}
