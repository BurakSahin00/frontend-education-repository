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
  dueDate: Date | null;
  createdAt: Date;
  updatedAt?: Date;
  tags?: string[];
  assignedUserId?: string;   
}
