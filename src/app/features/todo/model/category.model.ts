export interface Category {
    id: number;
    name: string;
    description: string;
    taskCount: number;
    createdAt: Date;
    updatedAt?: Date;
}

export interface TodoCategory {
    id: number;
    name: string;
} 

export interface CreateCategoryRequest {
    name: string;
    description?: string;
    userId: number;
}

export interface UpdateCategoryRequest {
    id: number;
    name?: string;
    description?: string;
    userId?: number;    
}

export interface DeleteCategoryRequest {
    id: number;
}

export interface GetCategoriesByTaskRequest {
    taskId: number;
}