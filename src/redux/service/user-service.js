import { createApi } from "@reduxjs/toolkit/query/react";
import { createBace } from "../../config/create-bace";

export const userApi = createApi({
  reducerPath: "user_api",
  baseQuery: createBace(),
  tagTypes: ["javohir"],
  endpoints: (build) => ({
    getUsers: build.query({
      query: (page = 1) => {
        return {
          url: "/todos",
          params: {
            _limit: 4,
            _page: page,
          },
        };
      },
      transformResponse: (data, res) => {
        let countData = res?.response.headers.get("X-Total-count");
        if (countData % 4 != 0) {
          return { data, pageSize: Math.round((Number(countData) + 1) / 4) };
        }
        return { data, pageSize: Math.round(Number(countData) / 4) };
      },
      providesTags: ["javohir"],
    }),
    createApi: build.mutation({
      query: (data) => ({
        url: "/todos",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["javohir"],
    }),
    Delete: build.mutation({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["javohir"],
    }),
    Edit: build.mutation({
      query: ({ id, title, description }) => ({
        url: `/todos/${id}`,
        method: "PUT",
        body: { title, description },
      }),
      invalidatesTags: ["javohir"],
    }),
  }),
});
export const {
  useCreateApiMutation,
  useGetUsersQuery,
  useDeleteMutation,
  useEditMutation,
} = userApi;
