import { ApiSlice } from "../ApiSlice/ApiSlice";

const productApi = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/product',

            })
        }),
        bookProduct: builder.mutation({
            query: (data) => ({
                method: "POST",
                url: '/booking',
                body: data,
            })
        })
    })
})

export const { useGetProductsQuery, useBookProductMutation } = productApi