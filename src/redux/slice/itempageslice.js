import { createSlice } from "@reduxjs/toolkit";


const initialState = ({})

const itempageslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addproduct:(state,action) => state = {id:action.payload.id,image:action.payload.image},
   
      
     
    }
})

export const { addproduct } = itempageslice.actions
export default itempageslice.reducer