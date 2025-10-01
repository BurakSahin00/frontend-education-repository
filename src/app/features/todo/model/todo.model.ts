import { TodoCategory } from "./category.model";

export enum TodoPriority {
    Low = '0',
    Medium = '1',
    High = '2'
}

export interface Todo {
    id: number;
    title: string;
    description?: string;
    priority: 0 | 1 | 2;
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
    userId: number;
}

export interface UpdateTodoRequest {
    taskItemId: number;
    title?: string;
    description?: string;
    priority?: 0 | 1 | 2;
    dueDate?: Date;
    clearDueDate?: boolean;
    clearDescription?: boolean;
}

export interface CompleteTodoRequest {
    taskItemId: number;
}

export interface ReOpenTodoRequest {
    taskItemId: number;
}

export interface AssignTodoRequest {
    taskItemId: number;
    categoryId: number;
}

export interface UnassignTodoRequest {
    taskItemId: number;
    categoryId: number;
}

export interface GetTodosByCategoryRequest {
    categoryId: number;
}

export interface GetTodosByOverdueRequest {
    userId: number;
}

export interface GetTodosByUpcomingRequest {
    userId: number;
    days?: number;
}

export interface TodoFilterRequest {
    UserId: number;
    isCompleted?: boolean;
    Priority?: 0 | 1 | 2;
    CategoryId?: number;
    StartDate?: Date;
    EndDate?: Date;
}