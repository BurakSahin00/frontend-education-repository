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
  dueDate?: Date | null;
  tags?: string[];
}
