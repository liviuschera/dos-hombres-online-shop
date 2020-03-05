import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root.reducer";

const middlewares = [logger]; //here you will add as many middlewares as you need

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;
