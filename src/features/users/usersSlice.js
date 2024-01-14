import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
    isLogin: true,
    user: null,
    isLoading: false,
    isError: false,
    errors: null,
}

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


