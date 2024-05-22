import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getOneProducts:builder.query({
        query:(id)=>`products/${id}`
    }),
    postProduct:builder.mutation({
        query:(newProduct)=>({
            url:"products",
            method:'POST',
            body:newProduct,
            headers:{
                "Content-type":"application/json"
            }
        })
    }),
    deleteProduct:builder.mutation({
        query:(id)=>({
            url:`products/${id}`,
            method:'DELETE'
        })
    })
  }),
})


export const { useGetProductsQuery,useGetOneProductsQuery,usePostProductMutation,useDeleteProductMutation } = productApi