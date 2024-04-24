import { configureStore } from '@reduxjs/toolkit'
import ProjectReducer from './slices/projectSlice'
import taskReucer from './slices/TaskSlice'
export const store = configureStore({
    reducer: {
        app: ProjectReducer,
        tasks: taskReucer
    },
})
export default store