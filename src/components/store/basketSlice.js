import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addProductAsync = createAsyncThunk( //Добавление продукта в корзину
   'basket/addProductAsync',
   async function ({ item }, { rejectWithValue, dispatch, getState }) {

      let findItem = getState().basket.selectedProducts.find(value => value.id === item.id)
      if (findItem) return

      try {
         const response = await fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            body: JSON.stringify(item), // Отправка данных о товаре в виде строки JSON
            headers: {
               'Content-Type': 'application/json'
            }
         })
         if (!response.ok) {
            throw new Error(`Couldn't add a product`);
         }

         dispatch(addProductToBasket({ item }))

      } catch (error) {
         return rejectWithValue(error.message);
      }

   }
)

export const deleteProductAsync = createAsyncThunk(
   'basket/deleteProductAsync',
   async function ({ id }, { rejectWithValue, dispatch }) {
      try {
         const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
         })

         if (!response.ok) {
            throw new Error(`Couldn't delete the product`)
         }
         dispatch(removeItemFromBasket({ id }))

      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const rejected = (state, action) => {
   state.status = 'rejected'
   state.error = action.payload
}

const basketSlice = createSlice({
   name: 'basket',
   initialState: {
      selectedProducts: [],
      quantity: 0,
      isOpen: false,
      status: null,
      error: null,
   },
   reducers: {
      addProductToBasket(state, action) {
         state.quantity += 1
         state.selectedProducts.push(action.payload.item)
      },
      removeItemFromBasket(state, action) {
         state.selectedProducts = state.selectedProducts.filter(item => item.id !== action.payload.id)
         state.quantity -= 1
      },
      setIsOpen(state, action) {
         state.isOpen = action.payload
      },
   },
   extraReducers: {
      [addProductAsync.rejected]: rejected,
      [deleteProductAsync.rejected]: rejected,
   }
});

export const { addProductToBasket, removeItemFromBasket, setIsOpen } = basketSlice.actions;

export default basketSlice.reducer;