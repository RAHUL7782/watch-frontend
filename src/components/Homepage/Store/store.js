import { configureStore } from "@reduxjs/toolkit";

import cartReducer from  "../../Homepage/ProductSlice/productSlice";

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  
  };
  const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
    reducer: {
        cartSlice:persistedReducer
    }
});
export const persistor = persistStore(store)
export default store;