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
// profiles
import profilesReducer from '../features/profile/profilesSlice'
// posts reducers
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        nav: easyNavReducer,
        groups: groupsReducer,
        users: usersReducer,
        profiles: profilesReducer,
        posts: postsReducer,
    },
})