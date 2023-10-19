import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const CREDENTIALS = "credentials";

// Define a service using a base URL and expected endpoints
export const api = createApi({
    tagTypes:['tag'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_URL||"http://localhost:3000",
        prepareHeaders: (headers, { getState }) => {
            console.log("prepareHeaders is running");

            const credentials = window.sessionStorage.getItem(CREDENTIALS);
            const parsedCredentials = JSON.parse(credentials || "{}");
            const token = parsedCredentials.token;
            console.log("token from reducer", token);
            if (token) {
                headers.set("Authorization", token);
            }
            console.log("token from session storage:", token);
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
                url:'api/tags'
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
            query:()=>({
                url:'api/post',
                method:"POST",
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
}= api