import {
    configureStore,
} from '@reduxjs/toolkit'

// reducers
// easy nav reducer
import easyNavReducer from '../features/easy-nav/easyNavSlice'
// groups reducer
import groupsReducer from '../features/groups/groupsSlice'
// users reducers
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        nav: easyNavReducer,
        groups: groupsReducer,
        users: usersReducer,
    },
})