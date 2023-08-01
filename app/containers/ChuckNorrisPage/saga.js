// app/redux/chuckNorrisSaga.js

import { put, takeEvery } from 'redux-saga/effects';

function* fetchRandomJoke() {
  try {
    const response = yield fetch('https://api.chucknorris.io/jokes/random');
    const data = yield response.json();
    yield put({ type: 'SET_RANDOM_JOKE', payload: data.value });
  } catch (error) {
    console.error('Error al obtener el chiste aleatorio', error);
  }
}

function* chuckNorrisSaga() {
  yield takeEvery('FETCH_RANDOM_JOKE', fetchRandomJoke);
}

export default chuckNorrisSaga;
