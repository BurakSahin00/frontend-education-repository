export enum TodoPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High'
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: TodoPriority;
  parentId: string | null;  
  children?: Todo[];
  dueDate: Date | null;
  createdAt: Date;
  updatedAt?: Date;
  tags?: string[];
  assignedUserId: string;   
}

export interface TodoUpdate {
  title: string;
  description: string;
  priority?: TodoPriority;
}

// Runtime guard to validate incoming priority values (use at API boundaries)
export function isValidPriority(value: any): value is TodoPriority {
  return Object.values(TodoPriority).includes(value as TodoPriority);
}
