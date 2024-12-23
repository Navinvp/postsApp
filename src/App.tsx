import React, { useEffect } from 'react';
import { useGetPostsQuery } from './posts/postsApi';

import PostsList from './components/postsList/PostsList';
import AddPostsForm from './components/addPostsForm/AddPostsForm';

const App: React.FC = () => {
  // const { refetch } = useGetPostsQuery(undefined, { skip: true });

  // useEffect(() => {
  //   refetch(); // Trigger fetching posts
  // }, [refetch]);

  return (
    <div>
        <h1>Posts Application</h1>
        <AddPostsForm />
        <PostsList />
      </div>
  );
}

export default App;
