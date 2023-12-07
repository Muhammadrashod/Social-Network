import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface IGetPostListResponse {
  status: number;
  message: [
    {
      main_text: string;
      user_id: number;
      id: number;
      reg_date: string;
      user_fk: {
        email: string;
        phone_number: string;
        id: number;
        password: string;
        name: string;
        user_city: string;
        reg_date: string;
      };
      photos: string[];
      comments: string[];
    }
  ];
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPostList: builder.query<IGetPostListResponse, null>({
      query: () => "/post",
    }),
  }),
});

export const { useGetPostListQuery, useLazyGetPostListQuery } = postApi;
