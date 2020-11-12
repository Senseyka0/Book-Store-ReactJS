import { combineReducers } from "redux";

import { booksReducer } from "./books";
import { cartReducer } from "./cart";
import { sortReducer } from "./sort";

export const reducers = combineReducers({
  books: booksReducer,
  cart: cartReducer,
  sort: sortReducer,
});
