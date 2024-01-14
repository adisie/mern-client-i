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
}

// login
export const login = createAsyncThunk('users/signup',async data => {
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
        }
    },
    extraReducers: builder => {
        builder
            // cases
            // login case
            // pending case
            .addCase(login.pending,state=>{
                state.isLoading = true
            })
            // fullfilled case
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading = false 
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors 
                    state.user = null 
                    localStorage.removeItem('user')
                }
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

export const {
    setIsLogin,
} = usersSlice.actions

export default usersSlice.reducer


