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
          placeholder="Ingredient name"
          className="border-2 rounded px-2"
        />
        <input
          type="text"
          name="measurement"
          value={ingredient.measurement}
          onChange={handleChange}
          placeholder="Measurement"
          className="border-2 rounded px-2"
        />
        <button onClick={handleDelete} className="bg-red-500 text-white px-2 rounded">
        Delete
      </button>
      </div>
    );
  }
  