// Tem a função de juntar todos os Sagas em um único arquivo.

import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}
