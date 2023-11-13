import {createSlice} from "@reduxjs/toolkit";
import { api } from "./api";

 //session storage key
const CREDENTIALS = "credentials";

const authApi = api.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation({
            query: (cred)=>({
                url:"auth/login",
                method: "POST",
                body: cred
            })
        }),
        register: builder.mutation({
            query: (cred)=>({
                url:"auth/register",
                method: "POST",
                body: cred
            })
        }),
        edit: builder.mutation({
            query: (cred)=>({
                url:"/auth/edit",
                method: "PUT",
                body: cred
            }),
            invalidatesTags: ['EditAuth'],
        }),
        logout: builder.mutation({
            queryFn: ()=>({data:{}})
        })
    })
})

function storeToken(state, { payload }) {
    state.credentials = {
        token: payload.token,
        user: { 
            ...payload.user, 
            password: payload.password  
        }
    };
    window.sessionStorage.setItem(
        CREDENTIALS,
        JSON.stringify(state.credentials)
    );
}



const authSlice = createSlice({
    name: "auth",
    initialState: {
        credentials: JSON.parse(window.sessionStorage.getItem(CREDENTIALS)) || {
            token: "",
            user: {
                userId: null,
                username: null, 
                image: null,
                password: null
            }
        }
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
        builder.addMatcher(api.endpoints.edit.matchFulfilled, (state, { payload }) => {
            state.credentials = {
                ...state.credentials,
                user: {
                    ...state.credentials.user,
                    username: payload.user.username, 
                    image: payload.user.image,
                    password: payload.user.password
                }
            };
            window.sessionStorage.setItem(
                CREDENTIALS,
                JSON.stringify(state.credentials)
            );
        });       
        builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
        builder.addMatcher(api.endpoints.logout.matchFulfilled, (state)=>{
            console.log("logout")
            state.credentials = {
                token:"",
                user: {userId:null}
            };
            window.sessionStorage.removeItem(CREDENTIALS)
        });
    }
})

export const selectCurrentUserId = (state) => state.auth.credentials.user.userId;
export default  authSlice.reducer;

export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation, 
    useEditMutation,
} = authApi