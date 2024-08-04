import { createAction } from '@reduxjs/toolkit';

export const setStockData = createAction<{ symbol: string; data: any[] }>('SET_STOCK_DATA');
