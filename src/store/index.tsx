import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import filterViewTypeReducer from '../reducers/filterViewOptionSlice'
import changeNavBarBgColorReducer from '../reducers/headerEventsOnScroll/changeNavBarBgOnScrollSlice'
import stickySubHeaderToTheTopReducer from '../reducers/headerEventsOnScroll/stickySubHeaderToTheTopSlice'

export const store = configureStore({
  reducer: {
    changeNavBarBgOnScroll: changeNavBarBgColorReducer,
    stickySubHeaderToTheTop: stickySubHeaderToTheTopReducer,
    filterViewOption: filterViewTypeReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
