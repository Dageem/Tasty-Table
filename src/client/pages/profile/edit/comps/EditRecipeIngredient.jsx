import React from 'react';

export default function EditRecipeIngredient({ ingredient, handleUpdate, handleDelete }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      handleUpdate({ ...ingredient, [name]: value });
    };
  
    return (
      <div className="flex items-center space-x-2">
        <input
          type="text"
          name="name"
          value={ingredient.name}
          onChange={handleChange}
          placeholder="Ingredient"
          className="border rounded px-2 py-2 w-full border-blue-gray-200 my-1"
        />
        <input
          type="text"
          name="measurement"
          value={ingredient.measurement}
          onChange={handleChange}
          placeholder="Measurement"
          className="border rounded px-2 py-2 w-full border-blue-gray-200"
        />
        <button
          type="button"
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 py-2 rounded-full hover:bg-red-300"
        >
          Delete
        </button>
      </div>
    );
    };