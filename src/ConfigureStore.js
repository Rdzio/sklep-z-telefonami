import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
// import hardSet from 'redux-persist/lib/stateReconciler/hardSet'


import CartReducer from "./components/Cart/CartReducer";

const persistConfig = {
  key: "root",
  storage,
//   debug: true,
  whitelist: ["addedItems", "total", "itemsAdded"],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, CartReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
