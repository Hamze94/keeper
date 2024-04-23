import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addTask = createAsyncThunk('tasks/addTask', async (taskData) => {
  const response = await axios.post('http://localhost:3030/tasks', taskData);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId) => {
  await axios.delete(`http://localhost:3030/tasks/${taskId}`);
  return taskId;
});

export const setTaskCompleted = createAsyncThunk('tasks/setTaskCompleted', async (taskId) => {
  const response = await axios.patch(`http://localhost:3030/tasks/${taskId}`, { completed: true });
  return response.data;
});

export const resetTaskTimer = createAsyncThunk('tasks/resetTaskTimer', async (taskId) => {
  const response = await axios.patch(`http://localhost:3030/tasks/${taskId}`, { time: 24 });
  return response.data;
});

export const startTaskTimer = createAsyncThunk('tasks/startTaskTimer', async (taskId) => {
  const response = await axios.patch(`http://localhost:3030/tasks/${taskId}`, { isRunning: true });
  return response.data;
});

export const stopTaskTimer = createAsyncThunk('tasks/stopTaskTimer', async (taskId) => {
  const response = await axios.patch(`http://localhost:3030/tasks/${taskId}`, { isRunning: false });
  return response.data;
});

export const fetchTasksByState = createAsyncThunk('tasks/fetchTasksByState', async ({ projectId, state }) => {
  const response = await axios.get(`http://localhost:3030/tasks?projectId=${projectId}&completed=${state}`);
  return response.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasksByState.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasksByState.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchTasksByState.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter(task => task.id !== action.payload);
      })
      .addCase(setTaskCompleted.fulfilled, (state, action) => {
        const task = state.items.find(task => task.id === action.payload.id);
        if (task) {
          task.completed = true;
        }
      })
      .addCase(resetTaskTimer.fulfilled, (state, action) => {
        const task = state.items.find(task => task.id === action.payload.id);
        if (task && task.time === 24) {
          task.time = 24;
          task.remainingTime = 24;
          task.remainingSeconds = 0;
        }
      })
      .addCase(startTaskTimer.fulfilled, (state, action) => {
        const task = state.items.find(task => task.id === action.payload.id);
        if (task) {
          task.isRunning = true;
        }
      })
      .addCase(stopTaskTimer.fulfilled, (state, action) => {
        const task = state.items.find(task => task.id === action.payload.id);
        if (task) {
          task.isRunning = false;
        }
      });
  },
});

export default tasksSlice.reducer;
