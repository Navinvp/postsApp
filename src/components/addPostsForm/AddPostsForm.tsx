import React, { useState } from 'react';
import { useAddPostMutation } from '../../posts/postsApi';

const AddPostForm: React.FC = () => {
  const [formData, setFormData] = useState({ userId: '', title: '', body: '', completed: false });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [addPost] = useAddPostMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            await addPost({
                userId: formData.userId,
                title: formData.title,
                body: formData.body,
            });
            console.log('Post Created');
            setFormData({ userId: '', title: '', body: '', completed: false });
            // Refresh posts after successful post submission
        } catch (err) {
            setError('An error occurred while adding the post');
            console.error('Error adding post:', err);
        } finally {
            setIsLoading(false);
        }
    };


  return (
    <div className="container mt-4">
            <h3>Add New Post</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">User ID</label>
                    <input
                        type="number"
                        name="userId"
                        id="userId"
                        className="form-control"
                        value={formData.userId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Body</label>
                    <textarea
                        name="body"
                        id="body"
                        className="form-control"
                        rows={4}
                        value={formData.body}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Post'}
                </button>
            </form>
        </div>
    );
};

export default AddPostForm;
