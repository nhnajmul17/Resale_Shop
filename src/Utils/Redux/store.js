import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice/ProductSlice";
import AuthSlice from "./AuthSlice/AuthSlice";
import { ApiSlice } from "./ApiSlice/ApiSlice";

export const store = configureStore({
    reducer: {
        [ApiSlice.reducerPath]: ApiSlice.reducer,
        product: ProductSlice,
        auth: AuthSlice,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiSlice.middleware),


})