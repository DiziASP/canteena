import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { itemReducer } from "./item.slice";
import { cartReducer } from "./cart.slice";

const rootPersistConfig = {
  key: "root",
  storage,
  timeout: 1000,
};

const itemPersistConfig = {
  key: "item",
  storage,
  timeout: 1000,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  item: persistReducer(itemPersistConfig, itemReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
