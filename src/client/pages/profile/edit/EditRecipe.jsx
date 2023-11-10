import React, { useState, useEffect } from "react";
import {
  useGetPopTagsQuery,
  useGetRecipeByIdQuery,
  useGetTagsQuery,
} from "../../../reducers/api";
import { useEditRecipeMutation } from "../../../reducers/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import EditRecipeIngredients from "./comps/EditRecipeIngredients";
import { api } from "../../../reducers/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditRecipe() {
  // Redux
  const me = useSelector((state) => state.auth.credentials.user);

  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // API and Edit
  const { data, isLoading, error } = useGetTagsQuery();
  const {
    data: popData,
    isLoading: popLoad,
    error: popError,
  } = useGetPopTagsQuery();
  const {
    data: recipeData,
    isLoading: isLoadingRecipe,
    isError,
  } = useGetRecipeByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const [editRecipe, { isLoading: isEditing, error: editError }] =
    useEditRecipeMutation();
  const [hasUpdated, setHasUpdated] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    details: "",
    desc: "",
    instructions: "",
    imageUrl: "",
    image2Url: "",
    image3Url: "",
    tags: [{ name: "" }],
    ingredients: [{ name: "", measurement: "" }],
  });

  // Update local state
  useEffect(() => {
    if (recipeData && !isLoadingRecipe && !isError) {
      setFormData({
        name: recipeData.name || "",
        details: recipeData.details || "",
        desc: recipeData.desc || "",
        instructions: recipeData.instructions || "",
        imageUrl: recipeData.imageUrl || "",
        image2Url: recipeData.image2Url || "",
        image3Url: recipeData.image3Url || "",
        tags:
          recipeData.recipetags?.map((tag) => ({ name: tag.tag.name })) || [],
        ingredients: recipeData.Ingredient_recipe?.map((ingredient) => ({
          name: ingredient?.ingredient?.name || "",
          measurement: ingredient.measurement || "",
        })) || [{ name: "", measurement: "" }],
      });
    }
  }, [recipeData, isLoadingRecipe, isError]);

  useEffect(() => {
    if (hasUpdated) {
      navigate("/profile");
    }
  }, [hasUpdated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Update Payload before submission:", formData);

    try {
      const updatedRecipe = await editRecipe({ ...formData, id: id }).unwrap();
      console.log("Edit Recipe Response:", updatedRecipe);

      // Invalidate the cache
      api.util.invalidateTags([{ type: "Recipe", id: id }]);

      // Set hasUpdated to trigger the navigation
      setHasUpdated(true);
    } catch (err) {
      console.error("Failed to update recipe", err);
      setHasUpdated(false);
    }
  };

  useEffect(() => {
    console.log("Form data changed:", formData);
  }, [formData]);

  const toggleTag = (apiTag) => {
    const tagExists = formData.tags.some((tag) => tag.name === apiTag.name);
    const updatedTags = tagExists
      ? formData.tags.filter((tag) => tag.name !== apiTag.name)
      : [...formData.tags, { name: apiTag.name }];

    setFormData((prevFormData) => ({
      ...prevFormData,
      tags: updatedTags,
    }));
  };

  const removeTag = (tagName) => {
    const updatedTags = formData.tags.filter((tag) => tag.name !== tagName);

    setFormData({
      ...formData,
      tags: updatedTags,
    });
  };

  const isLoadingAnyData = isLoading || popLoad || isLoadingRecipe || isEditing;
  const hasError = error || popError || isError || editError;
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-5">
      <>
        {isLoadingAnyData && <div>Loading...</div>}
        {hasError && <div>Error: {hasError.message}</div>}
        {!isLoadingAnyData && !hasError && recipeData && (
          <form
            className="bg-white p-8 rounded-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2"
            onSubmit={handleSubmit}
          >
            <button
              className="border p-3 mb-6 bg-red-500 text-white font-bold rounded-full hover:bg-red-300"
              onClick={() => navigate("/profile")}
            >
              Go Back
            </button>
            <h1 className="text-2xl mb-4 font-extrabold">Recipe Submission</h1>
            <h1 className="text-xl mb-4 font-semibold">Name:</h1>
            {/* <div className="p-4 mb-6 bg-blue-gray-50 text-black rounded px-6 py-3 hover:bg-blue-gray-50">
            Name
            </div> */}
            <input
              name="name"
              className="border w-full rounded mb-4 border-blue-gray-200"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <h1 className="text-xl mb-4 font-semibold">Details:</h1>
            <textarea
              name="details"
              className="border h-20 w-full rounded mb-4 border-blue-gray-200"
              value={formData.details}
              onChange={handleChange}
              placeholder="Details"
            ></textarea>
            <h1 className="text-xl mb-4 font-semibold">Desc:</h1>
            <textarea
              name="description"
              className="border h20 w-full rounded mb-4 border-blue-gray-200"
              value={formData.desc}
              onChange={handleChange}
              placeholder="description"
            />
            <h1 className="text-xl mb-4 font-semibold">ImageUrl 1:</h1>
            <input
              name="imageUrl"
              className="border w-full rounded mb-4 border-blue-gray-200"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="imageUrl"
            />
            <h1 className="text-xl mb-4 font-semibold">ImageUrl 2:</h1>
            <input
              name="image2Url"
              className="border w-full rounded mb-4 border-blue-gray-200"
              value={formData.image2Url}
              onChange={handleChange}
              placeholder="image2Url"
            />
            <h1 className="text-xl mb-4 font-semibold">ImageUrl 3:</h1>
            <input
              name="image3Url"
              className="border w-full rounded mb-4 border-blue-gray-100"
              value={formData.image3Url}
              onChange={handleChange}
              placeholder="image3Url"
            />
            {/* Display all available tags from the API */}
            <div className="w-full px-3 mb-6 md:mb-0">
              <h1 className="text-xl mb-4 font-semibold">
                Current Tags{" "}
                <strong className="text-sm font-semibold">
                  (Click To Remove):
                </strong>
              </h1>
              <div className="flex flex-wrap gap-2 p-3 bg-gray-200 rounded">
                {formData.tags.map((tag, index) => (
                  <div key={index} className="relative group">
                    <button
                      type="button"
                      className="absolute -top-2 -right-2 z-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={() => removeTag(tag.name)}
                    >
                      &ndash;
                    </button>
                    <div className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-300">
                      {tag.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Section for Popular Tags */}
            {popData && !popLoad && (
              <div className="w-full px-3 mb-6 md:mb-0">
                <h1 className="text-xl mb-4 font-semibold">
                  Add Tags{" "}
                  <strong className="text-sm font-semibold">
                    (Click To Add):
                  </strong>
                </h1>
                <div className="flex flex-wrap gap-2">
                  {popData.map((apiTag) => {
                    const isSelected = formData.tags.some(
                      (tag) => tag.name === apiTag.name
                    );
                    return (
                      <button
                        key={apiTag.id}
                        type="button"
                        className={`flex items-center bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-300 ${
                          isSelected ? "hidden" : ""
                        }`}
                        onClick={() => toggleTag(apiTag)}
                      >
                        {apiTag.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <EditRecipeIngredients
              ingredients={formData.ingredients}
              setIngredients={(newIngredients) =>
                setFormData({ ...formData, ingredients: newIngredients })
              }
            />
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-300 text-black p-2 rounded mb-4 hover:bg-green-200"
              >
                Update Recipe
              </button>
              {/* //  disabled={isSubmitting}>
                    // {isSubmitting ? 'Updating...' : 'Update Recipe'} */}
            </div>
          </form>
        )}
      </>
      {/* )} */}
    </div>
  );
}

export default EditRecipe;
