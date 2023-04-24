import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const ApiSlice = createApi({
    reducerPath: 'ApiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
    endpoints: (builder) => ({
    }),
})