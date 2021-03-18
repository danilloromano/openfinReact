import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_VODKA_URL, GET_ALL_DRINKS_AL, GET_DRINK_BY_ID } from '~/utils/url'

function* fetchVodkaDrinks() {
    const json = yield fetch(GET_VODKA_URL)
    .then(response => response.json())
    .catch(error => console.log(error))
    yield put({ type: "VODKA_DRINKS_RECEIVED", json: json.drinks });
}

function* fetchDrinkById(drinkId) {
    const json = yield fetch(`${GET_DRINK_BY_ID}${drinkId}`)
    .then(response => response.json())
    .catch(error => console.log(error))
    yield put({ type: "GET_DRINK_BY_ID_RECIVED", json: json.drinks });
}

function* fetchAllAlcoolicDrinks() {
    const json = yield fetch(GET_ALL_DRINKS_AL)
    .then(response => response.json())
    .catch(error => console.log(error))
    yield put({ type: "GET_ALL_DRINKS_AL_RECEIVED", json: json.drinks });
}

function* actionWatcher() {
    yield takeLatest('GET_VODKA_DRINKS', fetchVodkaDrinks);
    yield takeLatest('GET_DRINK_BY_ID', fetchDrinkById);
    yield takeLatest('GET_ALL_DRINKS_AL', fetchAllAlcoolicDrinks);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}