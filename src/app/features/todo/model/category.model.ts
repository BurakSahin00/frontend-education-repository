export interface Category {
    id: string;
    name: string;
    description: string;
    taskCount: number;
    createdAt: Date;
    updatedAt?: Date;
}

export interface TodoCategory {
    id: string;
    name: string;
} 

export interface CreateCategoryRequest {
    name: string;
    description?: string;
}

export interface UpdateCategoryRequest {
    id: string;
    name?: string;
    description?: string;
}

export interface DeleteCategoryRequest {
    id: string;
}

export interface GetCategoriesByTaskRequest {
    taskId: string;
}