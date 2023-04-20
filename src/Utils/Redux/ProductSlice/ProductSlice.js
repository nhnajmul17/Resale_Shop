import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    message: ''
}
const ProductSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {

    }
})

export default ProductSlice.reducer