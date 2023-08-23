import { createSlice } from "@reduxjs/toolkit";
import { goods } from "../../data/goods";

const filterProductSlice = createSlice({
   name: 'product',
   initialState: {
      product: goods,
      textInput: '',
   },
   reducers: {
      handleChangeInput(state, action) {
         if (!action.payload) {
            state.product = goods
            state.textInput = ''
            return
         }
         state.textInput = action.payload
         state.product = (goods.filter(item =>
            item.name.toLowerCase().includes(action.payload.toLowerCase())
         ))
      },
   }
});

export const { handleChangeInput } = filterProductSlice.actions;

export default filterProductSlice.reducer;