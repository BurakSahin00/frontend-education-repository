import { TodoCategory } from "./category.model";

export enum TodoPriority {
    Low = '0',
    Medium = '1',
    High = '2'
}

export interface Todo {
    id: string;
    title: string;
    description?: string;
    priority: TodoPriority;
    dueDate?: Date;
    completedAt?: Date;
    isCompleted: boolean;
    userId: string;
    userEmail?: string;
    createdAt: Date;
    updatedAt?: Date;
    categories?: TodoCategory[]; // Array of category objects
}

export interface CreateTodoRequest {
    title: string;
    description?: string;
    priority: 0 | 1 | 2;
    dueDate?: Date;
    userId: string;
}

export interface UpdateTodoRequest {
    taskItemId: string;
    title?: string;
    description?: string;
    priority?: 0 | 1 | 2;
    dueDate?: Date;
    clearDueDate?: boolean;
    clearDescription?: boolean;
}

export interface CompleteTodoRequest {
    taskItemId: string;
}

export interface ReOpenTodoRequest {
    taskItemId: string;
}

export interface AssignTodoRequest {
    todoId: string;
    categoryId: string;
}

export interface UnassignTodoRequest {
    todoId: string;
    categoryId: string;
}

export interface GetTodosByCategoryRequest {
    categoryId: string;
}

export interface TodoFilterRequest {
    UserId: number;
    isCompleted?: boolean;
    Priority?: 0 | 1 | 2;
    CategoryId?: number;
    StartDate?: Date;
    EndDate?: Date;
}