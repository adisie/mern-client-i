import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


// initial state
const initialState = {
    allPosts: []
}

// get all posts
export const getAllPosts = createAsyncThunk('posts/getAllPosts',async () => {
    try{
        const response = await axios.get('/api/posts/get-all-posts')
        return response.data
    }catch(err){
        return err.response.data
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder 
            // get all posts case
            // fulfilled case
            .addCase(getAllPosts.fulfilled,(state,action)=>{
                if(action.payload.posts){
                    state.allPosts = action.payload.posts
                }
            })
            // rejected case
            .addCase(getAllPosts.rejected,state => {
                console.log('rejected case')
            })
    },
})

export const selectAllPosts = state => state.posts.allPosts

export default postsSlice.reducer