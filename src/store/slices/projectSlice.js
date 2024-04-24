import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjectData = createAsyncThunk('projects/fetchProjectData', async () => {
    try {
        const response = await axios.get('http://localhost:3000/projects');
        return response.data.projects; // Assuming response data structure
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        throw error;
    }
});

export const fetchTaskData = createAsyncThunk(
    'tasks/fetchTaskData', async () => {
        try {
            const { taskList } = await axios.get('http://localhost:3000/tasks');
            return taskList;
        } catch (error) {
            console.log(error);
        }
    }
);

const projectSlice = createSlice({
    name: "projects",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        addProject(state, action) {
            state.data.push(action.payload);
        },
        removeProject(state, action) {
            state.data = state.data.filter(project => project.id !== action.payload);
        },
        updateProject(state, action) {
            const { id, newName } = action.payload;
            const project = state.data.find(project => project.id === id);
            if (project) {
                project.name = newName;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjectData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProjectData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchProjectData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchTaskData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTaskData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTaskData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addProject, removeProject, updateProject } = projectSlice.actions;

export default projectSlice.reducer;
