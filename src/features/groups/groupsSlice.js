import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    GROUP_DIR: 'ALL',
}

const groupsSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {
        setGroupDir: (state,action) => {
            state.GROUP_DIR = action.payload
        }
    },
    extraReducers: builder => {

    }
})

export const {
    setGroupDir,
} = groupsSlice.actions

export const selectGroupDir = state => state.groups.GROUP_DIR

export default groupsSlice.reducer