import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./slice/cartslice"
import itemslice from "./slice/itemslice"
import itempageslice from "./slice/itempageslice"
import catslice from "./slice/catslice"

export const store = configureStore({
    reducer: {
     cart: cartSlice,
     item : itemslice,
     page: itempageslice,
      cat: catslice
     }
})