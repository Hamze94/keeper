import { configureStore } from '@reduxjs/toolkit'
import ProjectReducer from './slices/projectSlice'
export const store = configureStore({
    reducer: {
        app: ProjectReducer,
    },
})
export default store