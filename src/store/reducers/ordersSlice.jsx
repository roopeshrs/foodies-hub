import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
};

let nextOrderId = 1;

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const { cartItems } = action.payload;
      state.orders.push({ orderId: nextOrderId++, status: 'On the way', items: cartItems });
    },
    updateOrderStatus: (state, action) => {
        const { orderId, status } = action.payload;
        const order = state.orders.find(order => order.orderId === orderId);
        if (order) {
          order.status = status;
        }
    },
    clearOrders: (state) => {
        state.orders = [];
    },
  },
});

export const { addOrder, updateOrderStatus, clearOrders } = ordersSlice.actions;

export default ordersSlice.reducer;