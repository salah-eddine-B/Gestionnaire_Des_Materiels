import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice.js'
import uiReducer from './uiSlice.js';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        ui:uiReducer,
    }
});

export default store;