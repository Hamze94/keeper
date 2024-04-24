import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCheck, FaTrashAlt, FaPlay, FaPause, FaPlus } from 'react-icons/fa';
import {
  addTask,
  deleteTask,
  setTaskCompleted,
  resetTaskTimer,
  startTaskTimer,
  stopTaskTimer,
  fetchTasksByState,
  fetchTasksByProjectAndState,
} from '../store/slices/TaskSlice';
import ProjectCart from './ProjectCart';

const TaskManagement = ({ projectId }) => {

  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskTime, setTaskTime] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tasks = useSelector((state) => state.tasks.items);
  const status = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);
  const [filterState, setFilterState] = useState('all');

  const handleFilterChange = (state) => {
    setFilterState(state);
    dispatch(fetchTasksByProjectAndState({ projectId, state }));
  };
  useEffect(() => {
    dispatch(fetchTasksByState({ projectId, state: 'all' }));
  }, [projectId, dispatch]);

  const handleAddTask = () => {
    dispatch(addTask({ name: taskName, description: taskDescription, time: taskTime, projectId }));
    setTaskName('');
    setTaskDescription('');
    setTaskTime(0);
    setIsModalOpen(false);
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleSetTaskCompleted = (taskId) => {
    dispatch(setTaskCompleted(taskId));
  };

  const handleResetTaskTimer = (taskId) => {
    dispatch(resetTaskTimer(taskId));
  };

  const handleStartTaskTimer = (taskId) => {
    dispatch(startTaskTimer(taskId));
  };

  const handleStopTaskTimer = (taskId) => {
    dispatch(stopTaskTimer(taskId));
  };

  return (
    <div className="task-management">
      <div className="flex justify-between items-center mb-4">
        <div>
          <button onClick={() => setIsModalOpen(true)} className="  flex text-BLACK py-2 px-4 ">
            <FaPlus className="mr-2 " />
            Add Task
          </button>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => handleFilterChange('all')}>All</button>
          <button onClick={() => handleFilterChange('in_progress')}>Active</button>
          <button onClick={() => handleFilterChange('completed')}>Completed</button>
        </div>
      </div>
      <ProjectCart />
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Add New Task</h3>
            <form onSubmit={handleAddTask} className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              />
              <textarea
                placeholder="Task Description"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="number"
                placeholder="Task Time (minutes)"
                value={taskTime}
                onChange={(e) => setTaskTime(parseInt(e.target.value))}
                className="border border-gray-300 p-2 rounded"
              />
              <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                  Add Task
                </button>
                <button onClick={() => setIsModalOpen(false)} className="ml-4 text-gray-600 hover:text-gray-800">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {status === 'loading' && <div>Loading tasks...</div>}
      {status === 'idle' && (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task-item border-2 border-[#f97315] rounded-md p-4 mb-4 flex flex-col relative">
              {/* Task name centered */}
              <span className="font-semibold text-lg text-center mb-2">{task.name}</span>
              <div className="flex justify-between items-center">
                {/* Button group */}
                <div className="flex items-center space-x-2">
                  {task.isRunning ? (
                    <button onClick={() => handleStopTaskTimer(task.id)} className="absolute left-0 bottom-0">
                      <FaPause className="text-yellow-500" />
                    </button>
                  ) : (
                    <button onClick={() => handleStartTaskTimer(task.id)} className="absolute right-0 bottom-0">
                      <FaPlay className="text-green-500" />
                    </button>
                  )}
                  <button onClick={() => handleSetTaskCompleted(task.id)}>
                    <FaCheck className="text-green-500" />
                  </button>
                  <button onClick={() => handleResetTaskTimer(task.id)}>
                    <FaTrashAlt className="text-red-500" />
                  </button>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    <FaTrashAlt className="text-red-500" />
                  </button>
                </div>
              </div>
              <div className="border-t border-gray-300 py-2">
                <p className="text-sm">{task.description}</p>
              </div>
              {/* Progress bar centered */}
              <div className="flex justify-center items-center mt-2">
                <div className="w-full bg-gray-300 rounded-full relative">
                  <div
                    className="h-2 bg-green-500 rounded-full"
                    style={{ width: `${(task.time - task.remainingTime) / task.time * 100}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm">Time Left: {task.time} minutes</span>
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">Play icon here</span>
                  <span className="text-xs text-gray-500">{task.remainingTime} minutes left</span>
                </div>
              </div>
            </li>
          ))}




        </ul>
      )}
      {error && <div className="text-red-500">Error: {error}</div>}
    </div>
  );
};

export default TaskManagement;
