import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
   name: 'basket',
   initialState: {
      selectedProducts: [],
      quantity: 0,
      isOpen: false
   },
   reducers: {
      addProductToBasket(state, action) {
         let newItem = action.payload.item;
         let findItem = state.selectedProducts.find(value => value.id === newItem.id)

         if (findItem) {
            return
         }
         state.quantity += 1
         state.selectedProducts.push(newItem)
      },
      removeItemFromBasket(state, action) {
         state.selectedProducts = state.selectedProducts.filter(item => item.id !== action.payload.id)
         state.quantity -= 1
      },
      setIsOpen(state, action) {
         state.isOpen = action.payload
      },
   }
});

export const { addProductToBasket, removeItemFromBasket, setIsOpen } = basketSlice.actions;

export default basketSlice.reducer;