import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetRecipeByIdQuery, useAddCommentMutation, useDeleteCommentMutation } from '../../reducers/api';
import SingleHead from './comps/SingleHead';
import RecipeDetails from './comps/RecipeDetails';
import './Comment.css';
import { setComments, addComment, deleteComment } from '../../reducers/commentsSlice';

export default function SingleRecipe() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);
  const [message, setMessage] = useState("");
  const me = useSelector((state) => state.auth.credentials.user);
  const comments = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const [addcommentapi] = useAddCommentMutation();
  const [deleteCommentapi] = useDeleteCommentMutation();
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(true);
  const nav = useNavigate();

  const handleAddComment = async () => {
    if (me.userId) {
      if (message.trim() !== "") {
        // Check if message is not empty after trimming whitespace
        try {
          setLoading(true);
          const newCommentData = await addcommentapi({
            recipeId: id,
            message,
            userId: me.userId,
          });

          const newComment = {
            recipeId: id,
            message,
            userId: me.userId,
            user: {
              userId: me.userId,
              username: me.username,
            },
            createdAt: new Date().toISOString(),
          };

          dispatch(addComment(newComment));
          setMessage("");
          setLoading(false);
        } catch (error) {
          console.error("Error adding comment:", error);
          setLoading(false);
        }
      } else {
        alert("Please enter a message before submitting."); // Display an alert if message is empty
      }
    } else {
      nav("/login");
    }
  };
  function formatCreatedAt(createdAt) {
    const date = new Date(createdAt);
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleString(undefined, options);
  }
  const handleDeleteComment = async (commentId) => {
    try {
      await deleteCommentapi(commentId);
      dispatch(deleteComment(commentId)); // Remove the deleted comment from Redux state
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else if (recipe && recipe.Comment) {
      dispatch(setComments(recipe.Comment)); // Set initial comments to Redux state
      setLoad(false); // Set load to false after initial comments are loaded
      setLoading(false); // Set loading to false after comments are loaded
    }
  }, [recipe, isLoading, dispatch]);

  if (load) return null;
console.log(comments)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen xl:w-[70%] xl:ml-[15%] text-blue-gray-900 my-4">
      <SingleHead />
      <RecipeDetails />
      <form onSubmit={handleSubmit}>
        <h3 className="comments-title">Comments</h3>
        <ul className="comment-list">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="bg-white p-4 rounded-lg shadow mb-4 relative"
            >
              <div className="flex justify-between mb-2">
                <p className="text-base font-bold text-gray-600">
                  {comment.user.username}
                </p>
                <p className="text-xs text-gray-500">
                  {formatCreatedAt(comment.createdAt)}
                </p>
              </div>
              <p className="text-base mb-4">{comment.message}</p>
              {me.userId && comment.user.id === me.userId && (
                <button
                  onClick={() =>
                    handleDeleteComment(comment.id, comment.user.userId)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 transition duration-300 absolute bottom-0 right-0"
                >
                  Delete
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="add-comment">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Add a comment..."
          />
          <button onClick={handleAddComment}>Submit</button>
        </div>
      </form>
    </div>
  );
}
