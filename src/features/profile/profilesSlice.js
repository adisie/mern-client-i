import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// initial state
const initialState = {
    allUsersProfiles: [],
    myProfiles: []
}

// get my profiles
export const getMyProfiles = createAsyncThunk('profiles/getMyProfiles',async () => {
    try{

    }catch(err){
        
    }
})

const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {

    },
    extraReducers: builder => {

    },
})


export default profilesSlice.reducer