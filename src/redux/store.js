import {configureStore} from '@reduxjs/toolkit'; 
import cartSlice from './cartSlice';

// SIMPLE STORE - NO EXTRA SLICES NEEDED
// All chat, user, and order features are handled in UserContext.jsx

export const store = configureStore({
    reducer:{
        cart: cartSlice,
    }
})

export default store;



