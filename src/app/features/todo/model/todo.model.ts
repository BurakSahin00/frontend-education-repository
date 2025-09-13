    
export enum TodoPriority {
    Low = 'low',
    Medium = 'medium',
    High = 'high'
}

export interface Todo {
    id: string;
    assignedUserId: string;
    title: string;
    description?: string;
    priority: TodoPriority;
    isCompleted: boolean;
    dueDate?: Date;
    completedAt?: Date;
}

export interface ChildTodo extends Todo {
    parentId: string;
}