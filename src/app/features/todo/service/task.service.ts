import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AssignTodoRequest, CompleteTodoRequest, CreateTodoRequest, GetTodosByCategoryRequest, ReOpenTodoRequest, TodoFilterRequest, UnassignTodoRequest, UpdateTodoRequest } from "../model/todo.model";
import { HttpParams } from '@angular/common/http';
import { Response } from "../model/response.model";


@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient) { }

    getTodos(userId: number): Observable<Response> {
        return this.http.get<Response>('/url/api/TaskItem/user-tasks', { params: { UserId: userId.toString() } });
    }

    getFilteredTasks(options: TodoFilterRequest): Observable<Response> {
        let params = new HttpParams();
        if (options.UserId !== undefined) params = params.set('UserId', options.UserId.toString());
        if (options.isCompleted !== undefined) params = params.set('IsCompleted', options.isCompleted.toString());
        if (options.Priority !== undefined) params = params.set('Priority', options.Priority.toString());
        if (options.StartDate) params = params.set('StartDate', options.StartDate.toISOString());
        if (options.EndDate) params = params.set('EndDate', options.EndDate.toISOString());
        if (options.CategoryId !== undefined) params = params.set('CategoryId', options.CategoryId.toString());

        return this.http.get<Response>('/url/api/TaskItem/filtered-tasks', { params });
    }

    getUpcomingTasks(userId: number, days?: number): Observable<Response> {
        if (days) {
            return this.http.get<Response>('/url/api/TaskItem/upcoming-tasks', { params: { userid: userId.toString(), days: days.toString() } });
        }
        return this.http.get<Response>('/url/api/TaskItem/upcoming-tasks', { params: { userid: userId.toString() } });
    }

    getOverdueTasks(userId: number): Observable<Response> {
        return this.http.get<Response>('/url/api/TaskItem/overdue-tasks', { params: { userid: userId.toString() } });
    }

    createTask(todo: CreateTodoRequest): Observable<Response> {
        return this.http.post<Response>('/url/api/TaskItem/', todo);
    }

    updateTask(todo: UpdateTodoRequest, todoId: number): Observable<Response> {
        return this.http.put<Response>(`/url/api/TaskItem/${todoId}`, todo);
    }

    deleteTask(todoId: number): Observable<Response> {
        return this.http.delete<Response>(`/url/api/TaskItem/${todoId}`);
    }

    assignCategory(assignment: AssignTodoRequest): Observable<Response> {
        return this.http.post<Response>(`/url/api/TaskItem/assign-category`, assignment);
    }

    unassignCategory(assignment: UnassignTodoRequest): Observable<Response> {
        return this.http.delete<Response>(`/url/api/TaskItem/unassign-category`, { body: assignment });
    }

    completeTask(todo: CompleteTodoRequest): Observable<Response> {
        return this.http.post<Response>(`/url/api/TaskItem/complete`, todo);
    }

    reopenTask(todo: ReOpenTodoRequest): Observable<Response> {
        return this.http.post<Response>(`/url/api/TaskItem/reopen`, todo);
    }

    getTasksByCategory(filter: GetTodosByCategoryRequest): Observable<Response> {
        return this.http.get<Response>(`/url/api/TaskItem/category/${filter.categoryId}`);
    }

}