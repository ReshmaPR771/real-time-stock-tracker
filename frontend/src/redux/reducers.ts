import { createReducer } from '@reduxjs/toolkit';
import { setStockData } from './action';

interface StockState {
  [key: string]: any[];
}

const initialState: StockState = {};

const stockReducer = createReducer(initialState, (builder) => {
  builder.addCase(setStockData, (state, action) => {
    state[action.payload.symbol] = action.payload.data;
  });
});

export default stockReducer;