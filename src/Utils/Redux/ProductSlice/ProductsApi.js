import { ApiSlice } from "../ApiSlice/ApiSlice";

const productApi = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/product',

            })
        })
    })
})

export const { useGetProductsQuery } = productApi