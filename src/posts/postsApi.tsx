import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setPosts, addPost } from './postsSlice';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setPosts(data));
        } catch (err) {
          console.error('Error fetching posts:', err);
        }
      },
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: '/posts',
        method: 'POST',
        body: newPost,
      }),
      async onQueryStarted(newPost, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addPost(data));
        } catch (err) {
          console.error('Error adding post:', err);
        }
      },
    }),
  }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery, useAddPostMutation } = postsApi;
