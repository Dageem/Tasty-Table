import { configureStore } from "@reduxjs/toolkit";
import { api } from "./reducers/api";
import authReducer from './reducers/auth';
import dataReducer from './reducers/api'
import searchReducer from "./reducers/api";
import savedRecipeReducer from "./reducers/SavedRecipeSlice";



const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        auth: authReducer,
        // search: searchReducer
   
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

export default store;
