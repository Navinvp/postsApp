import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  userId: number; // The ID of the user who created the post
  id?: number;    // The unique ID of the post (optional for new posts)
  title: string;  // The title of the post
  body: string;   // The content/body of the post
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});

export const { setPosts, addPost } = postsSlice.actions;
export default postsSlice.reducer;
