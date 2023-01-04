import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BACKEND_BASE_URL
    }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({pageno, perpage, search}) => `/get-products?pageno=${pageno}&perpage=${perpage}&search=${search}`,
            providesTags: ["products"]
        })
    })
})

export const {
    useGetProductsQuery
} = api;