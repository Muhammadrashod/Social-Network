import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export interface IGetPhotosListResponse {
  status: number;
  message: {
    status: number;
    message: null;
  };
}

export interface IAddNewPhotoResponse {
  detail: [
    {
      type: string;
      loc: [string, string];
      msg: string;
      input: string;
      ctx: {
        error: {};
      };
      url: string;
    }
  ];
}

export interface IAddNewPhotoPayload {
  post_id: number;
  url: string;
}

export interface IDeletePhotoPayload {}

export interface IDeletePhotoResponse {
  status: number;
  message: string;
}

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostPhotosList: builder.query<IGetPhotosListResponse, null>({
      query: () => "/photo",
    }),
    getPostPhotoItem: builder.query<any, string>({
      query: (photo_id) => `/photo?photo_id=${photo_id}`,
    }),
    addPostPhoto: builder.mutation<IAddNewPhotoResponse, IAddNewPhotoPayload>({
      query: (payload) => ({
        url: "/add-photo",
        method: "POST",
        body: payload,
      }),
    }),
    deletePostPhoto: builder.mutation<IDeletePhotoResponse, string>({
      query: (photo_id: string) => ({
        url: `/photo/?photo_id=${photo_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
