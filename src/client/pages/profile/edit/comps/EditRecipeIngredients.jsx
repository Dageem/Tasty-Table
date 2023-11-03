import React from 'react';
import EditRecipeIngredient from './EditRecipeIngredient'
import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';



export default function EditRecipeIngredients({ ingredients, setIngredients }) {
    const handleUpdateIngredient = (index, newIngredient) => {
      const updatedIngredients = [...ingredients];
      updatedIngredients[index] = newIngredient;
      setIngredients(updatedIngredients);
    };
  
    const handleDeleteIngredient = (index) => {
      const updatedIngredients = ingredients.filter((_, i) => i !== index);
      setIngredients(updatedIngredients);
    };
    // const [isAdding, setIsAdding] = useState(false);

    const handleAddIngredient = () => {
      console.log('Before adding:', ingredients);
      setIngredients([...ingredients, { name: '', measurement: '' }]);
      console.log('After adding:', ingredients);
    };
    
    
    return (
      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ingredients:
        </label>
        {ingredients.map((ingredient, index) => (
        <EditRecipeIngredient
          key={ingredient.id || index} // 
          ingredient={ingredient}
          handleUpdate={(newIngredient) => handleUpdateIngredient(index, newIngredient)}
          handleDelete={() => handleDeleteIngredient(index)}
        />
      ))}
        <button type="button" onClick={handleAddIngredient}  className="mt-2 bg-blue-500 text-white px-2 rounded">
          Add Ingredient 
        </button>
      </div>
    );
  }

  