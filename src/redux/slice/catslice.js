import { createSlice } from "@reduxjs/toolkit";


const initialState =[{}];

const catslice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        addcat:(state,action) => state = {Priceto:action.payload.to,Pricefrom:action.payload.from,Category:action.payload.category}
     
    }
})

export const { addcat } = catslice.actions
export default catslice.reducer