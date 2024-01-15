import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// local user
const localUser = JSON.parse((localStorage.getItem('user')))

// initial state
const initialState = {
    isLogin: true,
    user: localUser ? localUser : null,
    isLoading: false,
    isError: false,
    errors: null,
    myProfiles: []
}

// signup
export const signup = createAsyncThunk('users/signup',async data => {
    try{
       const response = await axios.post('/api/users/signup',data)
       return response.data 
    }catch(err){
        return err.response.data
    }
})
// login
export const login = createAsyncThunk('users/login',async data => {
    try{
        const response = await axios.post('/api/users/login',data)
        // console.log(response)
        return response.data
    }catch(err){
        // console.log(err)
        return err.response.data
    }
})

// logout
export const logout = createAsyncThunk('users/logout',async () => {
    try{
        const response = await axios.get('/api/users/logout')
        return response.data
    }catch(err){
        return err.response.data
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsLogin: (state,action) => {
            state.isLogin = action.payload
        },
        resetErrors: state => {
            state.errors = null
        }
    },
    extraReducers: builder => {
        builder
            // cases
            // signup case
            // pending case
            .addCase(signup.pending,state =>{
                state.isLoading = true 
            })
            // fulfilled case
            .addCase(signup.fulfilled,(state,action)=> {
                state.isLoading = false 
                if(action.payload?.user){
                    state.user = action.payload.user 
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }

                if(action.payload?.errors){
                    state.errors = action.payload.errors 
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            // login case
            // pending case
            .addCase(login.pending,state=>{
                state.isLoading = true
            })
            // fullfilled case
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading = false 
                if(action.payload?.user){
                    state.user = action.payload.user 
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload?.profiles){
                    state.myProfiles = action.payload.profiles
                }
                if(action.payload?.errors){
                    state.errors = action.payload.errors 
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            // rejected case
            .addCase(login.rejected,state => {
                console.log('REJECTED')
                state.isLoading = false
            })
            // logout
            // fulfilled case
            .addCase(logout.fulfilled,(state,action)=>{
                if(action.payload.message === "logged out"){
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
    },
})

export const selectIsLogin = state => state.users.isLogin 
export const selectIsLoading = state => state.users.isLoading
export const selectErrors = state => state.users.errors 
export const selectUser = state => state.users.user
export const selectMyProfiles = state => state.users.myProfiles

export const {
    setIsLogin,
    resetErrors,
} = usersSlice.actions

export default usersSlice.reducer


