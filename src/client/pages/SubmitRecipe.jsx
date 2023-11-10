import React, { useState } from "react";
import { useCreateRecipeMutation } from "../reducers/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SubmitRecipe.css";

const RecipeForm = () => {
  const me = useSelector((state) => state.auth.credentials.user);
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [desc, setDesc] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image2Url, setImage2Url] = useState("");
  const [image3Url, setImage3Url] = useState("");
  const [tags, setTags] = useState([{ name: "" }]);
  const [ingredients, setIngredients] = useState([
    { name: "", measurement: "" },
  ]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [createRecipe] = useCreateRecipeMutation();
  const navigate = useNavigate();

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index].name = value;
    setTags(newTags);
  };

  const handleIngredientChange = (index, name, measurement) => {
    const newIngredients = [...ingredients];
    newIngredients[index].name = name;
    newIngredients[index].measurement = measurement;
    setIngredients(newIngredients);
  };

  const handleAddTag = () => {
    setTags([...tags, { name: "" }]);
  };

  const handleDeleteTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", measurement: "" }]);
  };

  const handleDeleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyTagCount = tags.filter((tag) => tag.name.trim() === "").length;
    const emptyIngredientCount = ingredients.filter(
      (ingredient) =>
        !ingredient.name.trim() || !ingredient.measurement.trim()
    ).length;

    if (emptyTagCount > 1) {
      toast.warn(
        "Please fill out empty tag fields, otherwise remove blank fields!"
      );
      return;
    }

    if (
      !name.trim() ||
      !details.trim() ||
      !desc.trim() ||
      !instructions.trim() ||
      !imageUrl.trim() ||
      emptyIngredientCount > 0
    ) {
      toast.error(
        "Please fill in all required fields: recipe name, details, description, at least one image, and your recipe ingredients. Thank you"
      );
      return;
    }

    const recipeData = {
      name,
      details,
      desc,
      instructions,
      imageUrl,
      image2Url,
      image3Url,
      userId: me.userId,
      tags: tags.filter((tag) => tag.name.trim()),
      ingredients: ingredients.filter(
        (ingredient) =>
          ingredient.name.trim() && ingredient.measurement.trim()
      ),
    };

    try {
      const response = await createRecipe(recipeData);
      console.log(response);
      setIsSubmitted(true);
      toast.success("Recipe submitted successfully!", {
        autoClose: 2000, // Toast will auto-close after 2 seconds
      });
      setTimeout(() => navigate("/profile"), 5000);
    } catch (error) {
      console.error("Error creating recipe:", error);
      toast.error("Error creating recipe!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen lg:w-[60%] lg:mx-auto py-3">
      <div className="w-full sm:w-4/5 lg:w-3/4 xl:w-2/3">
        {isSubmitted ? (
          <>
            <button
              type="button"
              className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 focus:outline-none"
              onClick={() => navigate("/profile")}
            >
              Go Back
            </button>
            <div className="text-center mt-8">
              <h1 className="text-2xl mb-4 font-bold text-green-500">
                Recipe submitted successfully!
              </h1>
            </div>
          </>
        ) : (
          <form
            className="bg-white p-8 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <h1 className="text-2xl mb-4 font-extrabold">Recipe Submission</h1>
            <h1 className="text-xl mb-4 font-semibold">Name:</h1>
            <input
              className="border p-2 w-full rounded mb-4 border-blue-gray-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <h1 className="text-xl mb-4 font-semibold">Details:</h1>
            <textarea
              className="border p-2 h-20 w-full rounded mb-4 border-blue-gray-200"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Details"
            ></textarea>
            <h1 className="text-xl mb-4 font-semibold">Description:</h1>
            <textarea
              className="border p-2 h-40 w-full rounded mb-4 border-blue-gray-200"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Description"
            ></textarea>
            <h1 className="text-xl mb-4 font-semibold">Instructions:</h1>
            <textarea
              className="border p-2 h-60 w-full rounded mb-4 border-blue-gray-200"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Instructions"
            ></textarea>
            <h1 className="text-xl mb-4 font-semibold">Image URL 1:</h1>
            <input
              className="border p-2 w-full rounded mb-4 border-blue-gray-200"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
            />
            <h1 className="text-xl mb-4 font-semibold">Image URL 2:</h1>
            <input
              className="border p-2 w-full rounded mb-4 border-blue-gray-200"
              value={image2Url}
              onChange={(e) => setImage2Url(e.target.value)}
              placeholder="Image 2 URL"
            />
            <h1 className="text-xl mb-4 font-semibold">Image URL 3:</h1>
            <input
              className="border p-2 w-full rounded mb-4 border-blue-gray-200"
              value={image3Url}
              onChange={(e) => setImage3Url(e.target.value)}
              placeholder="Image 3 URL"
            />

            <h1 className="text-xl mb-4 font-semibold">Recipe Tags:</h1>
            <button
              type="button"
              className="bg-green-300 text-purple p-2 rounded mb-4 hover:bg-green-200"
              onClick={handleAddTag}
            >
              Add Tag
            </button>

            {tags.map((tag, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center">
                  <input
                    value={tag.name}
                    onChange={(e) => handleTagChange(index, e.target.value)}
                    placeholder="Tag Name"
                    className="border p-2 w-1/2 rounded mr-2 border-blue-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteTag(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <h1 className="text-xl mb-4 font-semibold">Ingredient + Measurement:</h1>
            <button
              type="button"
              className="bg-green-300 text-purple p-2 rounded mb-4 hover:bg-green-200"
              onClick={handleAddIngredient}
            >
              Add Ingredient
            </button>

            {ingredients.map((ingredient, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center">
                  <input
                    value={ingredient.name}
                    onChange={(e) =>
                      handleIngredientChange(index, e.target.value, ingredient.measurement)
                    }
                    placeholder="Ingredient Name"
                    className="border p-2 w-1/2 rounded mr-2 border-blue-gray-200"
                  />
                  <input
                    value={ingredient.measurement}
                    onChange={(e) =>
                      handleIngredientChange(index, ingredient.name, e.target.value)
                    }
                    placeholder="Measurement"
                    className="border p-2 w-1/2 rounded mr-2 border-blue-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteIngredient(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <button
              type="submit"
              className="bg-green-300 text-white p-2 w-full rounded mt-4 hover:bg-green-200"
            >
              Submit Recipe
            </button>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default RecipeForm;

