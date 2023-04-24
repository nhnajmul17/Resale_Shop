import { ApiSlice } from "../ApiSlice/ApiSlice";

const CategoryApi = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => ({
                url: '/category'
            })
        }),
    })

})

export const { useGetCategoriesQuery } = CategoryApi