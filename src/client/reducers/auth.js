import {createSlice} from "@reduxjs/toolkit";
import { api } from "./api";

 //session storage key
const CREDENTIALS = "credentials";

const authApi = api.injectEndpoints({
    tagTypes: ['EditAuth'],
    endpoints: (builder)=>({
        login: builder.mutation({
            query: (cred)=>({
                url:"auth/login",
                method: "POST",
                body: cred
            })
        }),
            editCreds: builder.mutation({
                query: (cred)=>({
                    url:"auth/edit",
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

function storeToken(state, {payload}){
    console.log(payload)
    state.credentials = {token: payload.token, user: {...payload.user}};
    window.sessionStorage.setItem(
        CREDENTIALS,
        JSON.stringify({
            token: payload.token,
            user: {...payload.user}
        })
    )
}


const authSlice = createSlice({
    name: "auth",
    initialState: {
        credentials : JSON.parse(window.sessionStorage.getItem(CREDENTIALS)) || {
            token:"",
            user: {userId:null},
            image: {image:null}
        }
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
        // builder.addMatcher(api.endpoints.edit.matchFulfilled, storeToken);
        builder.addMatcher(api.endpoints.edit.matchFulfilled, (state, {payload})=>{
            return {
                ...state,
                image: payload
            }
        }) 
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
    useEditCredsMutation,
} = authApi