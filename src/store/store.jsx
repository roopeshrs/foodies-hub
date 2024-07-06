import { configureStore } from "@reduxjs/toolkit";
import appReducer from './reducers/appSlice';
import cartReducer from './reducers/cartSlice';
import ordersReducer from './reducers/ordersSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        cart: cartReducer,
        orders: ordersReducer,
    },
});