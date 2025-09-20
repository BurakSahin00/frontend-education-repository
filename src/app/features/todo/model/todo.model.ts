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
    priority: TodoPriority;
    dueDate?: Date;
    userId: string;
}

export interface UpdateTodoRequest {
    id: string;
    title?: string;
    description?: string;
    priority?: TodoPriority;
    dueDate?: Date;
    clearDueDate?: boolean;
    clearDescription?: boolean;
}

export interface CompleteTodoRequest {
    id: string;
}

export interface ReOpenTodoRequest {
    id: string;
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
