import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetRecipeByIdQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
} from "../../reducers/api";
import SingleHead from "./comps/SingleHead";
import RecipeDetails from "./comps/RecipeDetails";
import "./Comment.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SingleRecipe() {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id);
  const [message, setMessage] = useState(""); // State for new comment input
  const me = useSelector((state) => state.auth.credentials.user);

  const [addcomment] = useAddCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const navigate = useNavigate();
  const [errorAddingComment, setErrorAddingComment] = useState("");

  const handleAddComment = async () => {
    if (me) {
      try {
        await addcomment({ recipeId: id, message, userId: me.userId });
        setMessage(""); // Reset the comment input after adding
        setErrorAddingComment(""); // Reset error message
      } catch (error) {
        console.error("Error adding comment:", error);
        setErrorAddingComment("Error adding comment. Please try again.");
      }
    } else {
      // If user is not logged in, redirect to login page
      navigate("/login");
    }
  };
  const handleDeleteComment = async (commentId, UserId) => {
    if (me && me.userId === UserId) {
      try {
        await deleteComment(commentId);
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    } else {
      console.error("You do not have permission to delete this comment.");
    }
  };
function handleSubmit(e) {
  e.preventDefault()
}
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Categories! {error.message}</p>;

  return (
    <div className="w-[95%] ml-[2.5%] min-h-screen xl:w-[70%] xl:ml-[15%] text-blue-gray-900 my-4">
      <SingleHead />
      <RecipeDetails />
      <form onSubmit={handleSubmit}>
        <h3 className="comments-title">Comments</h3>
        {errorAddingComment && <p className="error-message">{errorAddingComment}</p>}
        <ul className="comment-list">
          {recipe.Comment.map((comment) => (
            <li key={comment.id} className="comment">
              <p>{comment.message}</p>
              <p>User: {comment.user.username}</p>
              {me && me.userId === comment.user.userId && (
                <button
                  onClick={() =>
                    handleDeleteComment(comment.id, comment.user.userId)
                  }
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
