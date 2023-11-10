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
  

    const handleAddIngredient = () => {
      console.log('Before adding:', ingredients);
      setIngredients([...ingredients, { name: '', measurement: '' }]);
      console.log('After adding:', ingredients);
    };
    
    
    return (
      <div>
        <h1 className="text-xl mb-4 font-semibold">Ingredients + Measurements:</h1>
        <button type="button" onClick={handleAddIngredient}  className="bg-green-300 text-purple p-2 rounded mb-4 hover:bg-green-200">
          Add Ingredient 
        </button>
        {ingredients.map((ingredient, index) => (
        <EditRecipeIngredient
          key={ingredient.id || index} // 
          ingredient={ingredient}
          handleUpdate={(newIngredient) => handleUpdateIngredient(index, newIngredient)}
          handleDelete={() => handleDeleteIngredient(index)}
        />
      ))}
      </div>
    );
  }

  