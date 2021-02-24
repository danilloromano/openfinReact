import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_VODKA_URL } from '../../utils/url'

function* fetchVodkaDrinks() {
    const json = yield fetch(GET_VODKA_URL).then(response => response.json());
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