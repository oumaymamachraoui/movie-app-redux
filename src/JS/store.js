import { createStore } from "redux";
import addReducers from "./reducers";

const store = createStore(
  addReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
