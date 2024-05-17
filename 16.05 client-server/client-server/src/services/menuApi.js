import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const menuApi = createApi({
  reducerPath: 'menuApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getAllMenu: builder.query({
      query: () => `menu`,
    }),
    deleteMenuById: builder.mutation({
      query: (id) => ({
        url: `menu/${id}`,
        method: "DELETE",
      }),
    }),
    getOnePost: builder.query({
      query: (id) => `menu/${id}`,
    }),
    postMenu: builder.mutation({
      query: (newMenu) => ({
        url: `menu`,
        method: 'POST',
        body: newMenu,
        headers: {
          'Content-type': 'application/json'
        }
      })
    })
  })
})

export const { useGetAllMenuQuery, useDeleteMenuByIdMutation, useGetOnePostQuery, usePostMenuMutation } = menuApi
