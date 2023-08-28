import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import basketSlice from "./basketSlice";
import filterProductSlice from "./filterProductSlice";

const rootReducer = combineReducers({
   basket: basketSlice,
   product: filterProductSlice,
})

const persistConfig = {
   key: 'root',
   storage,
   blacklist: ['product'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persister = persistStore(store);
export default store;