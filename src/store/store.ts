import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { newsApi } from './slices/apiSlice';

const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});
