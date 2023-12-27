import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

export interface IGetCommentsListResponse {
  status: number;
  message: string[];
}

export interface IAddNewCommentResponse {
  status: number;
  message: string[];
}

export interface IAddNewCommentPayload {
  post_id: number;
  user_id: number;
  text: string;
}
export interface IEditCommentResponse {
  status: number;
  message: string;
}

export interface IEditCommentPayload {
  comment_id: number;
  new_comment_text: string;
}

export interface IDeleteCommentPayload {}

export interface IDeleteCommentResponse {
  status: number;
  message: string;
}

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostComments: builder.query<IGetCommentsListResponse, string>({
      query: (postId: string) => `/comment?post_id=${postId}`,
    }),
    addCommentToPost: builder.mutation<
      IAddNewCommentResponse,
      IAddNewCommentPayload
    >({
      query: (payload) => ({
        url: "/comment",
        method: "POST",
        body: payload,
      }),
    }),
    editPostComment: builder.mutation<
      IEditCommentResponse,
      IEditCommentPayload
    >({
      query: (payload) => ({
        url: "/comment",
        method: "PUT",
        body: payload,
      }),
    }),
    deletePostComment: builder.mutation<IDeleteCommentResponse, string>({
      query: (comment_id) => ({
        url: `/post/?post_id=${comment_id}`,
        method: "DELETE",
      }),
    }),
  }),
});
