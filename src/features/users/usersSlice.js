import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// local user
const localUser = JSON.parse((localStorage.getItem('user')))

// initial state
const initialState = {
    isLogin: true,
    user: localUser ? localUser : null,
    allUsers: [],
    allUsersProfiles: [],
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

// get all users
export const getAllUsers = createAsyncThunk('users/getAllUsers',async () => {
    try{
        const response = await axios.get('/api/users/get-all-users')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// get users and profiles
export const getUsersProfiles = createAsyncThunk('users/getUsersProfiles',async () => {
    try{
        const response = await axios.get('/api/users/get-users-profiles')
        return response.data
    }catch(err){
        return err.response.data
    }
})

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////// profiles //////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// get my profiles
export const getMyProfiles = createAsyncThunk('users/getMyProfiles',async () => {
    try{
        const response = await axios.get('/api/profiles/get-all-my-profiles')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// add new profile
export const addNewProfile = createAsyncThunk('users/addNewProfile',async formData => {
    try{
        const response = await axios.post('/api/profiles/new-profile',formData)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// delete profile
export const deleteProfile = createAsyncThunk('users/deleteProfile',async _id => {
    try{
        const response = await axios.delete(`/api/profiles/delete-profile/${_id}`)
        return response.data
    }catch(err){
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
        },
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

            // get all users case
            // fulfilled case
            .addCase(getAllUsers.fulfilled,(state,action) =>{
                if(action.payload.users){
                    state.allUsers = action.payload.users 
                    }
            })

            // get users and profiles
            // fulfilled case
            .addCase(getUsersProfiles.fulfilled,(state,action) => {
                if(action.payload.usersProfiles){
                    state.allUsersProfiles = action.payload.usersProfiles
                }
            })
            // rejected case
            .addCase(getUsersProfiles.rejected,state => {
                console.log('get users and profiles rejected')
            })

            // profiles cases
            // delete profile cases
            .addCase(deleteProfile.fulfilled,(state,action) => {
                if(action.payload._id){
                    state.myProfiles = state.myProfiles.filter(profile => profile._id !== action.payload._id)
                }
            })

            // add new profile
            // fulfilled case
            .addCase(addNewProfile.fulfilled,(state,action)=>{
                if(action.payload.profile){
                    state.myProfiles = [action.payload.profile,...state.myProfiles]
                }
            })

            // get all my profiles case
            // fulfilled case
            .addCase(getMyProfiles.fulfilled,(state,action)=>{
                if(action.payload.profiles){
                    state.myProfiles = action.payload.profiles
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
export const selectAllUsers = state => state.users.allUsers
export const selectAllUsersProfiles = state => state.users.allUsersProfiles
export const selectMyProfiles = state => state.users.myProfiles

export const {
    setIsLogin,
    resetErrors,
} = usersSlice.actions

export default usersSlice.reducer


