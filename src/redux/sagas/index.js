import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchVodkaDrinks() {
    const json = yield fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
        .then(response => response.json());
    yield put({ type: "VODKA_DRINKS_RECEIVED", json: json.drinks });
}

function* actionWatcher() {
    yield takeLatest('GET_VODKA_DRINKS', fetchVodkaDrinks)
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}