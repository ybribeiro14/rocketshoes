// Função de juntar todos os reducers em um único arquivo.

import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});
