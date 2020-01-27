import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root.reducer";

const middlewares = [logger]; //here you will add as many middlewares as you need

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
