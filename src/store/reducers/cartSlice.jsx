import { createSlice } from "@reduxjs/toolkit";

const calculateTotal = (items) => {
    return items.reduce((total, item) => {
        const price = item?.card?.info?.defaultPrice || item?.card?.info?.finalPrice || item?.card?.info?.price;
        return total + (price / 100) * item.quantity;
    }, 0);
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item => item?.card?.info?.id === newItem?.card?.info?.id);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity += 1;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }

            state.total = calculateTotal(state.items);
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item?.card?.info?.id !== itemId);

            state.total = calculateTotal(state.items);
        },
        clearCart: (state) => {
            state.items = [];

            state.total = 0;
        },
        increaseQuantity: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.map(item => {
              if (item?.card?.info?.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })

            state.total = calculateTotal(state.items);
        },
        decreaseQuantity: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.map(item => {
              if (item?.card?.info?.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            })

            state.total = calculateTotal(state.items);
        },
    }
})

export const {addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;