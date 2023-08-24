import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
   'product/fetchProducts',
   async function (_, { rejectWithValue }) {
      try {
         const response = await fetch('https://dummyjson.com/products?limit=10');

         if (!response.ok) {
            throw new Error('An unexpected error occurred');
         }

         const data = await response.json();
         return data.products;

      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
)

const filterProductSlice = createSlice({
   name: 'product',
   initialState: {
      products: [],
      filterProducts: [],
      textInput: '',
      status: null,
      error: null,
   },
   reducers: {
      handleChangeInput(state, action) {
         if (!action.payload) {
            state.filterProducts = state.products
            state.textInput = ''
            return
         }
         state.textInput = action.payload

         state.filterProducts = (state.products.filter(item => //Отображение отфильтрованных товаров по введенному тексту
            item.title.toLowerCase().includes(action.payload.toLowerCase().trim())
         ))
      },
   },
   extraReducers: {
      [fetchProducts.pending]: (state) => {
         state.status = 'pending'
         state.error = null
      },
      [fetchProducts.fulfilled]: (state, action) => {
         state.status = 'resolved'
         state.filterProducts = action.payload
         state.products = action.payload
         state.error = null
      },
      [fetchProducts.rejected]: (state, action) => {
         state.status = 'rejected'
         state.error = action.payload
      },
   }
});


export const { handleChangeInput } = filterProductSlice.actions;

export default filterProductSlice.reducer;