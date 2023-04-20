import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice/ProductSlice";
import AuthSlice from "./AuthSlice/AuthSlice";

export const store = configureStore({
    reducer: {
        product: ProductSlice,
        auth: AuthSlice,

    }
})