import { createSlice } from "@reduxjs/toolkit";


const initialState =[

    {
        img: "./KM-P7-1-3_700x.webp",
        name:"AUKEY",
        price:20,
        id:1
    },
    {
      img: "./KM-P7-1-3_700x.webp",
      name:"AUKEY",
      price:20,
      id:2
    }
]

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {} 
})

export const { additem,removeItem,doneitem,editItem } = itemSlice.actions
export default itemSlice.reducer