import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Response } from "../model/response.model";
import { CreateCategoryRequest, UpdateCategoryRequest, DeleteCategoryRequest, GetCategoriesByTaskRequest } from "../model/category.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private http: HttpClient) { }

    getCategories(): Observable<Response> {
        return this.http.get<Response>('/url/api/Category');
    }

    getCategoryById(id: number): Observable<Response> {
        return this.http.get<Response>(`/url/api/Category/${id}`);
    }

    addCategory(request: CreateCategoryRequest): Observable<Response> {
        return this.http.post<Response>('/url/api/Category', request);
    }

    updateCategory(request: UpdateCategoryRequest): Observable<Response> {
        return this.http.put<Response>(`/url/api/Category/${request.id}`, request);
    }

    deleteCategory(request: DeleteCategoryRequest): Observable<Response> {
        return this.http.delete<Response>(`/url/api/Category/${request.id}`);
    }

    getCategoriesByTaskId(request: GetCategoriesByTaskRequest): Observable<Response> {
        return this.http.get<Response>(`/url/api/Category/task/${request.taskId}`);
    }
    
}