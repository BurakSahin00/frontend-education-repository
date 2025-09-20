import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AssignTodoRequest, CompleteTodoRequest, CreateTodoRequest, GetTodosByCategoryRequest, ReOpenTodoRequest, UnassignTodoRequest, UpdateTodoRequest } from "../model/todo.model";
import { HttpParams } from '@angular/common/http';
import { Response } from "../model/response.model";


@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient) { }

    getTodos(userId: number): Observable<Response> {
        return this.http.get<Response>('/api/TaskItem/user-tasks', { params: { userid: userId.toString() } });
    }

    getFilteredTasks(options: { userId: number; isCompleted?: boolean; priority?: string; startDate?: Date; endDate?: Date; categoryId?: number }): Observable<Response> {
        let params = new HttpParams();
        if (options.userId !== undefined) params = params.set('UserId', options.userId.toString());
        if (options.isCompleted !== undefined) params = params.set('IsCompleted', options.isCompleted.toString());
        if (options.priority !== undefined) params = params.set('Priority', options.priority.toString());
        if (options.startDate) params = params.set('StartDate', options.startDate.toISOString());
        if (options.endDate) params = params.set('EndDate', options.endDate.toISOString());
        if (options.categoryId !== undefined) params = params.set('CategoryId', options.categoryId.toString());

        return this.http.get<Response>('/api/TaskItem/filtered-tasks', { params });
    }

    getUpcomingTasks(userId: number, days?: number): Observable<Response> {
        if (days) {
            return this.http.get<Response>('/api/TaskItem/upcoming-tasks', { params: { userid: userId.toString(), days: days.toString() } });
        }
        return this.http.get<Response>('/api/TaskItem/upcoming-tasks', { params: { userid: userId.toString() } });
    }

    getOverdueTasks(userId: number): Observable<Response> {
        return this.http.get<Response>('/api/TaskItem/overdue-tasks', { params: { userid: userId.toString() } });
    }

    createTask(todo: CreateTodoRequest): Observable<Response> {
        return this.http.post<Response>('/api/TaskItem/', todo);
    }

    updateTask(todo: UpdateTodoRequest, todoId: number): Observable<Response> {
        return this.http.put<Response>(`/api/TaskItem/${todoId}`, todo);
    }

    deleteTask(todoId: number): Observable<Response> {
        return this.http.delete<Response>(`/api/TaskItem/${todoId}`);
    }

    assignCategory(assignment: AssignTodoRequest): Observable<Response> {
        return this.http.post<Response>(`/api/TaskItem/assign-category`, assignment);
    }

    unassignCategory(assignment: UnassignTodoRequest): Observable<Response> {
        return this.http.delete<Response>(`/api/TaskItem/unassign-category`, { body: assignment });
    }

    completeTask(todo: CompleteTodoRequest): Observable<Response> {
        return this.http.post<Response>(`/api/TaskItem/complete`, todo);
    }

    reopenTask(todo: ReOpenTodoRequest): Observable<Response> {
        return this.http.post<Response>(`/api/TaskItem/reopen`, todo);
    }

    getTasksByCategory(filter: GetTodosByCategoryRequest): Observable<Response> {
        return this.http.get<Response>(`/api/TaskItem/category/${filter.categoryId}`);
    }

}