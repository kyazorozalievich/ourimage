import { api as index } from "..";

const ENDPOINTS = process.env.NEXT_PUBLIC_ENDPOINT;

const api = index.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation<FILE.UploadFileResponse, FILE.UploadFileRequest>(
      {
        query: (data) => ({
          url: `/upload/file`,
          method: "POST",
          body: data,
        }),
        //   invalidatesTags: ["file"],
      }
    ),
    getTodos: build.query<FILE.GetTodosResponse, FILE.GetTodosRequest>({
      query: () => ({
        url: `${ENDPOINTS}`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodo: build.mutation<FILE.PostTodosResponse, FILE.PostTodosRequest>({
      query: (data) => ({
        url: `/${ENDPOINTS}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: build.mutation<
      FILE.DeleteTodosResponse,
      FILE.DeleteTodosRequest
    >({
      query: (_id) => ({
        url: `/${ENDPOINTS}/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useUploadFileMutation, useGetTodosQuery, usePostTodoMutation, useDeleteTodoMutation } =
  api;
