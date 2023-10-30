import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedRecipes: [],
};

export const savedRecipeSlice = createSlice({
  name: 'savedRecipes',
  initialState,
  reducers: {
    saveRecipe: (state, action) => {
      state.savedRecipes.push(action.payload);
    },
  },
});

export const { saveRecipe } = savedRecipeSlice.actions;

export default savedRecipeSlice.reducer;

