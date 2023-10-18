import React, { useState } from "react";
import {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostByIdMutation,
} from "../reducers/api";
import { useSelector } from "react-redux";

function CommunityBoard({ userId }) {
  const { data: post, error, isLoading } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostByIdMutation();
  const me = useSelector((state) => state.auth.credentials.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const PostData = {
      title,
      content,
      userId: me.userId,
    };

    console.log(PostData);
    try {
      const response = await createPost(PostData);
      console.log(response);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    userId: me.userId,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleAddPost = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await createPost(formData);
  //     console.log("Created post:", response);
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //   }
  //   console.log(formData)
  // };

  const handleDeletePost = async (postId) => {
    try {
      await deletePost(postId);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <div className="community-board">
      <h2>Community Board</h2>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        ></textarea>
        <button type="submit">Add Post</button>
      </form>

      <div className="post-list">
        {post &&
          post.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button onClick={() => handleDeletePost(post.id)}>
                Delete Post
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CommunityBoard;
