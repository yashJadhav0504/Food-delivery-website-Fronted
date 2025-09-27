import{createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        AddItem:(state,action)=>{
            // Check if item already exists
            const existingItem = state.find(item => item.id === action.payload.id);
            if(existingItem) {
                // If exists, increase quantity
                existingItem.qty += 1;
            } else {
                // If new item, add with qty 1
                state.push({...action.payload, qty: 1});
            }
        },
        RemoveItem:(state,action)=>{
            const existingItem = state.find(item => item.id === action.payload);
            if(existingItem && existingItem.qty > 0) {
                // Decrease quantity
                existingItem.qty -= 1;
            } else {
                // Remove item completely
                return state.filter((item)=>item.id!==action.payload);
            }
        }
    }         
})

export const {AddItem,RemoveItem} = cartSlice.actions;
export default cartSlice.reducer;




