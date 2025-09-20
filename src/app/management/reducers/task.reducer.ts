import { createReducer, on } from '@ngrx/store';
import { TaskActions } from '../actions/task.action';
import { TaskState } from '../states/task.state';

const initialState: TaskState = {
  tasks: [],
  status: 'empty',
  loading: false,
  filteredBy: 'none',
  error: null
};

export const taskFeature = createReducer(
  initialState,
    on(TaskActions.loadTasks, (state) => ({
      ...state,
      loading: true,
    })),
    on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
      ...state,
      tasks,
      status: tasks.length ? 'loaded' : 'empty',
      filteredBy: 'none',
      loading: false
    })),
    on(TaskActions.loadTasksFailure, (state, { error }) => ({
      ...state,
      error,
      status: 'error',
      loading: false
    })),
    on(TaskActions.loadOverdueTasks, (state) => ({
      ...state,
      loading: true
    })),
    on(TaskActions.loadOverdueTasksSuccess, (state, { tasks }) => ({
      ...state,
      tasks,
      status: tasks.length ? 'loaded' : 'empty',
      loading: false
    })),
    on(TaskActions.loadOverdueTasksFailure, (state, { error }) => ({
      ...state,
      error,
      status: 'error',
      loading: false
    })),
    on(TaskActions.loadUpcomingTasks, (state) => ({
      ...state,
      status: 'filtering',
      loading: true
    })),
    on(TaskActions.loadUpcomingTasksSuccess, (state, { tasks }) => ({
      ...state,
      status: tasks.length ? 'loaded' : 'empty',
      tasks,
    })),
    on(TaskActions.loadUpcomingTasksFailure, (state, { error }) => ({
      ...state,
      status: 'error',
      error,
    })),
    on(TaskActions.filterTasks, (state) => ({
      ...state,
      status: 'filtering',
      loading: true
    })),
    on(TaskActions.filterTasksSuccess, (state, { tasks, filteredBy }) => ({
      ...state,
      tasks,
      filteredBy,
      status: 'loaded',
      loading: false
    })),
    on(TaskActions.filterTasksFailure, (state, { error }) => ({
      ...state,
      error,
      status: 'error',
      loading: false
    })),
    on(TaskActions.addTask, (state) => ({
      ...state,
      status: 'adding',
      loading: true
    })),
    on(TaskActions.addTaskSuccess, (state, { task }) => ({
      ...state,
      tasks: [...state.tasks, task],
      status: 'loaded',
      loading: false
    })),
    on(TaskActions.addTaskFailure, (state, { error }) => ({
      ...state,
      status: 'error',
      error,
      loading: false
    })),
    on(TaskActions.updateTask, (state) => ({
      ...state,
      status: 'updating',
      loading: true
    })),
    on(TaskActions.updateTaskSuccess, (state, { task }) => ({
      ...state,
      status: 'loaded',
      tasks: state.tasks.map(t => (t.id === task.id ? task : t)),
      loading: false
    })),
    on(TaskActions.updateTaskFailure, (state, { error }) => ({
      ...state,
      status: 'error',
      error
    })),
    on(TaskActions.deleteTask, (state) => ({
      ...state,
      status: 'deleting',
      loading: true
    })),
    on(TaskActions.deleteTaskSuccess, (state, { taskId }) => ({
      ...state,
      status: state.tasks.length > 1 ? 'loaded' : 'empty',
      tasks: state.tasks.filter(t => t.id !== taskId),
      loading: false
    })),
    on(TaskActions.deleteTaskFailure, (state, { error }) => ({
      ...state,
      status: 'error',
      error,
      loading: false
    })),
    on(TaskActions.completeTask, (state) => ({
      ...state,
      status: 'completing',
      loading: true
    })),
    on(TaskActions.completeTaskSuccess, (state, { taskId }) => ({
      ...state,
      status: 'loaded',
      tasks: state.tasks.map(t => t.id === taskId.toString() ? { ...t, isCompleted: true, completedAt: new Date() } : t),
      loading: false
    })),
    on(TaskActions.completeTaskFailure, (state, { error }) => ({
      ...state,
      status: 'error',
      error,
      loading: false
    })),
    on(TaskActions.reopenTask, (state) => ({
      ...state,
      status: 'reopening',
      loading: true
    })),
    on(TaskActions.reopenTaskSuccess, (state, { taskId }) => ({
      ...state,
      status: 'loaded',
      tasks: state.tasks.map(t => t.id === taskId.toString() ? { ...t, isCompleted: false, completedAt: undefined } : t),
      loading: false
    })),
    on(TaskActions.reopenTaskFailure, (state, { error }) => ({
      ...state,
      status: 'error',
      error,
      loading: false
    })),
    on(TaskActions.assignCategory, (state) => ({
      ...state,
      loading: true,
    })),
    on(TaskActions.assignCategorySuccess, (state, { task }) => ({
      ...state,
      tasks: state.tasks.map(t => (t.id === task.id ? task : t)),
      loading: false
    })),
    on(TaskActions.assignCategoryFailure, (state, { error }) => ({
      ...state,
      error,
      loading: false
    })),
    on(TaskActions.unassignCategory, (state) => ({
      ...state,
      loading: true,
    })),
    on(TaskActions.unassignCategorySuccess, (state, { task }) => ({
      ...state,
      tasks: state.tasks.map(t => (t.id === task.id ? task : t)),
      loading: false
    })),
    on(TaskActions.unassignCategoryFailure, (state, { error }) => ({
      ...state,
      error,
      loading: false
    })),
    on(TaskActions.filterTasksByCategory, (state) => ({
      ...state,
      status: 'filtering',
      loading: true
    })),
    on(TaskActions.filterTasksByCategorySuccess, (state, { tasks, filteredBy }) => ({
      ...state,
      tasks,
      filteredBy,
      status: 'loaded',
      loading: false
    })),
    on(TaskActions.filterTasksByCategoryFailure, (state, { error }) => ({
      ...state,
      error,
      status: 'error',
      loading: false
    })),
);