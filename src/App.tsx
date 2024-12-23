import React from 'react';

import PostsList from './components/postsList/PostsList';
import AddPostsForm from './components/addPostsForm/AddPostsForm';

import './App.css';

const App: React.FC = () => {
  return (
    <div>
        <h1 className='header'>Posts Application</h1>
        <AddPostsForm />
        <PostsList />
      </div>
  );
}

export default App;
