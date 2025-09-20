export interface User {
    id: string;
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
    userId: string;
    email: string;
    password?: string;
}