export type UserRole = 'Admin' | 'User';

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt?: Date;
    todoLabels: string[];
    todoCategories: string[];
}