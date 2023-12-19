import { createSlice } from "@reduxjs/toolkit";



const initialState =[]

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        additem:(state,action) => {
            return  [...state, {img:action.payload.img,name:action.payload.name,price:action.payload.price,amount:action.payload.amount,id:action.payload.id+2}] 
        },
        
    }
})

export const { additem,removeItem,doneitem,editItem } = cartSlice.actions
export default cartSlice.reducer