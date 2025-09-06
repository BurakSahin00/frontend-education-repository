export enum TodoPriority {
  Low,
  Medium,
  High
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority?: TodoPriority;
  parentId: string | null;  
  children?: Todo[];
  dueDate: Date;
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
