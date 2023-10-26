import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const CREDENTIALS = "credentials";

// Define a service using a base URL and expected endpoints
export const api = createApi({
    tagTypes:['tag'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_URL||"http://localhost:3000",
        prepareHeaders: (headers, { getState }) => {
            const credentials = window.sessionStorage.getItem(CREDENTIALS);
            const parsedCredentials = JSON.parse(credentials || "{}");
            const token = parsedCredentials.token;
            if (token) {
                headers.set("Authorization", token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: ()=> 'api/users'
        }),
        getUserById: builder.query({
            query:(id)=>'api/users/'+id,
        }),
        updateUserById:builder.mutation({//not sure on this one
            query:(id)=>({
                url:'api/users/'+id,
                method:'PUT'
            })
        }),
        deleteUser: builder.mutation({
            query:(id)=>({
                url:'api/users/'+id,
                method:"DELETE",
            })
        }),
        getRecipes: builder.query({
            query:()=>({
                url:'api/recipe'
            })
        }),
        getSearchRecipes: builder.query({
            query: (searchQuery) => ({
              url: `search?query=${searchQuery}`,
            }),
          }),
        getRecipesByUserId: builder.query({
            query:(userId)=>({
                url:'api/recipe/users/'+userId,
            })
        }),
        createRecipe: builder.mutation({
            query:(recipeData)=>({
                url:'api/recipe/',
                method: "POST",
                body: JSON.stringify(recipeData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
        }),
        editRecipe: builder.mutation({
            query(data){
                const {id, ...body}=data;
                return {
                    url: '/api/recipe/'+id,
                    method:"PUT",
                    body
                }
            }
        }),
        getRecipeById: builder.query({
            query:(id)=>({
                url:'api/recipe/'+id,
            })
        }),
        deleteRecipeById: builder.mutation({
            query:(id)=>({
                url:'api/recipe/'+id,
                method:"DELETE",
            })
        }),
        getRecipesByName: builder.query({
            query:(tagname)=>({
                url:'api/recipe/recipesbytag/'+tagname
            })
        }),
        getThreeRecentRecipes: builder.query({
            query:()=>({
                url:'api/recipe/recent'
            })
        }),
        getRecipesByIngredient: builder.query({
            query:(name)=>({
                url:'api/recipe/recipebyingredient/'+name
            })
        }),
        getTags: builder.query({
            query:()=>({
                url:'api/tags/recipetags'
            })
        }),
        getPosts: builder.query({
            query:()=>({
                url:'api/post'
            })
        }),
        getPostByUserId: builder.query({
            query:(userId)=>({
                url:'api/post/user/'+userId
            })
        }),
        createPost: builder.mutation({
            query:(body)=>({
                url:'api/post',
                method:"POST",
                body:body
            })
        }),
        updatePostById: builder.mutation({
            query:(id)=>({
                url:'api/post/'+id,
                method:"PUT",
            })
        }),
        deletePostById: builder.mutation({
            query:(id)=>({
                url:'api/post/'+id,
                method:"DELETE",
            })
        }),
    }),
});


const dataSlice = createSlice({
    name:"data",
    initialState:{
        // tags
        tags:[],
        // recipe
        recipe:null,
        recipes:[],
        result:[],
        // post
        post:null,
        posts:[],
        // user
        users:[],
        user:null,

    },
    reducers:{},
    extraReducers: (builder)=>{
        //  Tag
        builder.addMatcher(api.endpoints.getTags.matchFulfilled, (state, {payload})=>{
            return{
                ...state,
                tags: payload
            }
        })

        //  Recipe 
        builder.addMatcher(api.endpoints.getRecipeById.matchFulfilled, (state, {payload})=>{
            return{
                ...state,
                recipe: payload
            }
        })

        builder.addMatcher(api.endpoints.getRecipesByUserId.matchFulfilled, (state, {payload})=>{
            console.log(payload)
            return{
                ...state,
                recipes: payload
            }
        })

        builder.addMatcher(api.endpoints.deleteRecipeById.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                recipes: state.recipes.filter(i=>i.id!==payload.id)
            }

        })

        builder.addMatcher(api.endpoints.createRecipe.matchFulfilled, (state, {payload})=>{
            state.recipes.push(payload);
            return state;
        })


        builder.addMatcher(api.endpoints.editRecipe.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                recipes: state.recipes.map(i=>i.id===payload.id?{...i, ...payload}:i)
            }
        })

        // Community Posts 
        builder.addMatcher(api.endpoints.getPostByUserId.matchFulfilled, (state, {payload})=>{
            return{
                ...state,
                posts: payload

            }
        })
       
        builder.addMatcher(api.endpoints.getPosts.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                posts: state.posts.map(i=>i.id===payload.id?{...i, ...payload}:i)
            }
        })

        builder.addMatcher(api.endpoints.updatePostById.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                recipes: state.recipes.map(i=>i.id===payload.id?{...i, ...payload}:i)
            }
        })

        builder.addMatcher(api.endpoints.deletePostById.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                posts: state.posts.filter(i=>i.id!==payload.id)
            }

        })

        builder.addMatcher(api.endpoints.createPost.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                recipes: state.recipes.filter(i=>i.id!==payload.id)
            }

        })

        // Users

        builder.addMatcher(api.endpoints.getUserById.matchFulfilled, (state, {payload})=>{
            return{
                ...state,
                user: payload
            }
        })

        builder.addMatcher(api.endpoints.getUsers.matchFulfilled, (state, {payload})=>{
            return{
                ...state,
                user: payload
            }
        })

        builder.addMatcher(api.endpoints.updateUserById.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                users: state.users.map(i=>i.id===payload.id?{...i, ...payload}:i)
            }
        })

        builder.addMatcher(api.endpoints.deleteUser.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                users: state.users.filter(i=>i.id!==payload.id)
            }

        })

        

        


    
    }
})



// const searchSlice = createSlice({
//     name:"search",
//     initialState:{
//         search:[],
//     },
//     reducers:{},
//     extraReducers: (builder)=>{
//         builder.addMatcher(api.endpoints.getSearchRecipes.matchFulfilled, (state, {payload})=>{
//             return{
//                 ...state,
//                 search: payload
//             }
//         })
//     }
// })

// export default searchSlice.reducer;

export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useUpdateUserByIdMutation,
    useDeleteUserMutation,
    useGetRecipesQuery,
    useCreateRecipeMutation,
    useGetRecipeByIdQuery,
    useDeleteRecipeByIdMutation,
    useGetRecipesByNameQuery,
    useGetRecipesByIngredientQuery,
    useGetPostsQuery,
    useGetPostByUserIdQuery,
    useCreatePostMutation,
    useUpdatePostByIdMutation,
    useDeletePostByIdMutation,
    useGetRecipesByUserIdQuery,
    useGetTagsQuery,
    useGetThreeRecentRecipesQuery,
    useEditRecipeMutation,
    useGetSearchRecipesQuery
}= api