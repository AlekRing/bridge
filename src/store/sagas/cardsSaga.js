import { put, call, takeEvery } from "redux-saga/effects";
import { addCards, startShake } from "@/store/reducers/cards";

function* shakeCards() {
  try {
    const res = yield fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const {deck_id} = yield res.json();

    yield getTwoCards(deck_id);
  } catch (error) {
    console.error(error);
  }
}

function* getTwoCards(deck_id) {
  try {
    const resCard = yield fetch(`https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`);
    const data = yield resCard.json();

    yield put(addCards(data.cards));
  } catch (error) {
    console.error('Fetching cards error: ', error);
  }
}

export function* root() {
  yield takeEvery(startShake, shakeCards);
}