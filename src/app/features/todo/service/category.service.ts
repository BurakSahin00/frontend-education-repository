import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Response } from "../model/response.model";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {
    constructor(private http: HttpClient) { }

    getCategories(): Observable<Response> {
        return this.http.get<Response>('/api/Category');
    }

    getCategoryById(id: number): Observable<Response> {
        return this.http.get<Response>(`/api/Category/${id}`);
    }

    addCategory(name: string, description: string): Observable<Response> {
        return this.http.post<Response>('/api/Category', { name, description });
    }

    updateCategory(id: number, name: string, description: string): Observable<Response> {
        return this.http.put<Response>(`/api/Category/${id}`, { id, name, description });
    }

    deleteCategory(id: number): Observable<Response> {
        return this.http.delete<Response>(`/api/Category/${id}`);
    }

    getCategoriesByTaskId(taskId: number): Observable<Response> {
        return this.http.get<Response>(`/api/Category/task/${taskId}`);
    }
    
}