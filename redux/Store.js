import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import {user} from "./reducers/userReducer"

export const configureStore = () => {
  const store = createStore(
    combineReducers({
     user
    }),
    applyMiddleware(thunk)
  );
  
  return store
}

