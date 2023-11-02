import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedRecipes: [],
};

export const savedRecipeSlice = createSlice({
  name: 'savedRecipes',
  initialState,
  reducers: {
    addSavedRecipe: (state, action) => {
      state.savedRecipes.push(action.payload);
    },
    removeSavedRecipe: (state, action) => {
      state.savedRecipes = state.savedRecipes.filter(recipe => recipe.id !== action.payload);
    },
  },
});

export const { addSavedRecipe, removeSavedRecipe, initializeSavedRecipes } = savedRecipeSlice.actions;

export default savedRecipeSlice.reducer;


