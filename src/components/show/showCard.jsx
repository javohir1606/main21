import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), 
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page) => `users?page=${page}`,
    }),
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
   
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;