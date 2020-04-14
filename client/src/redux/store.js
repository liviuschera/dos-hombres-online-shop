import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root.reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  //here you will add as many middlewares as you need
  middlewares.push(logger); // removing redux logger from production build
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { store, persistor };
