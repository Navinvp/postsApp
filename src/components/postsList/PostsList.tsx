import React from 'react';
import { useGetPostsQuery } from '../../posts/postsApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import styles from './PostsList.module.css';

const PostsList: React.FC = () => {
  const { error, isLoading } = useGetPostsQuery();
  const posts = useSelector((state: RootState) => state.posts.posts);  

  if (!posts.length) return <p>No posts available.</p>;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts!</p>;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {posts?.map((post: { id: number, userId: number; title: string, body: string }, index: number) => (
          <tr key={post.id} className={styles}>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostsList;
