import { Todo } from "../../features/todo/model/todo.model";

export interface TaskState {

  tasks: Todo[];
  selectedTask: Todo | null;

  status: 'filtering' | 'loaded' | 'adding' | 'updating' | 'deleting' | 'completing' | 'reopening' | 'error' | 'empty';
  loading: boolean;
  filteredBy: string[] | 'none';
  error: string[] | null;

}