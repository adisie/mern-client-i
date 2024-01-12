import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    MAIN_DIR: 'HOME'
}

const easyNavSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setMainDir: (state,action) => {
            state.MAIN_DIR = action.payload
        }
    },
})

export const {
    setMainDir,
} = easyNavSlice.actions

export const selectMainDir = state => state.nav.MAIN_DIR

export default easyNavSlice.reducer