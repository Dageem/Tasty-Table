import React, { useState } from "react";
import { useGetPostsQuery, useCreatePostMutation, useDeletePostByIdMutation } from "../reducers/api";

function CommunityBoard() {
  const { data: post, error, isLoading } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostByIdMutation();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddPost = async (e) => {
    e.preventDefault();
    try {
      const response = await createPost(formData);
      console.log("Created post:", response.data);
      setFormData({
        title: "",
        content: "",
        userId: ""
      });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId)
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <div className="community-board">
      <h2>Community Board</h2>

      <form onSubmit={handleAddPost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleInputChange}
        />
        <button type="submit">Add Post</button>
      </form>

      <div className="post-list">
        {post && post.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleDeletePost(post.id)}>Delete Post</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityBoard;