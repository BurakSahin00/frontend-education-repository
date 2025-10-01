export interface User {
    id: number;
    email: string;
    createdAt: Date;
    updatedAt?: Date;
    taskCount: number;
}

export interface RegisterRequest {
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface UpdateUserRequest {
    userId: number;
    email: string;
    password?: string;
}