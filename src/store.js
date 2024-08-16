// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './features/portfolioSlice';
import stockPricesReducer from './features/stockPricesSlice';

const store = configureStore({
    reducer: {
        portfolio: portfolioReducer,
        stockPrices: stockPricesReducer,
    },
});

export default store;
