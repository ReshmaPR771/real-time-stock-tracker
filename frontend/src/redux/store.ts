import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './reducers';

export const store = configureStore({
  reducer: {
    stockData: stockReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;