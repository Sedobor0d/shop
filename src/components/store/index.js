import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";
import filterProductSlice from "./filterProductSlice";


export default configureStore({
   reducer: {
      'basket': basketSlice,
      'product': filterProductSlice,
   }
});