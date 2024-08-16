// src/features/stockPricesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const stockPricesSlice = createSlice({
    name: 'stockPrices',
    initialState: {},
    reducers: {
        updateStockPrice: (state, action) => {
            const { symbol, currentPrice } = action.payload;
            state[symbol] = currentPrice;
        },
    },
});

export const { updateStockPrice } = stockPricesSlice.actions;
export default stockPricesSlice.reducer;
