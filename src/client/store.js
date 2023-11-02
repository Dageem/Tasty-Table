import { configureStore } from "@reduxjs/toolkit";
import { api } from "./reducers/api";
import authReducer from './reducers/auth';
import commentsReducer from "./reducers/commentsSlice"
import { searchReducer, dataReducer } from "./reducers/api";
// import savedRecipeReducer from "./reducers/SavedRecipeSlice";




const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        search: searchReducer,
        comments: commentsReducer,
        // saveRecipe: savedRecipeReducer,
        data: dataReducer,
   
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
