import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { AssignTodoRequest, CompleteTodoRequest, CreateTodoRequest, GetTodosByCategoryRequest, ReOpenTodoRequest, TodoFilterRequest, UnassignTodoRequest, UpdateTodoRequest } from "../model/todo.model";
import { HttpParams } from '@angular/common/http';
import { Response } from "../model/response.model";
import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/core';
import { of, tap } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId: Object) { }

    // Basic TransferState wrapper so SSR GET responses are reused on the client (avoids double fetch)
    private fromCache<T>(key: string, factory: () => Observable<T>): Observable<T> {
        const stateKey = makeStateKey<T>(key);
        if (isPlatformBrowser(this.platformId)) {
            if (this.transferState.hasKey(stateKey)) {
                const data = this.transferState.get(stateKey, null as any as T);
                this.transferState.remove(stateKey);
                return of(data);
            }
            return factory();
        }
        return factory().pipe(tap((data) => this.transferState.set(stateKey, data as any)));
    }

    getTodos(userId: number): Observable<Response> {
        const url = '/url/api/TaskItem/user-tasks';
        const params = new HttpParams().set('UserId', userId.toString());
        const key = `GET:${url}?${params.toString()}`;
        return this.fromCache<Response>(key, () => this.http.get<Response>(url, { params }));
    }

    getFilteredTasks(options: TodoFilterRequest): Observable<Response> {
        let params = new HttpParams();

        const toIso = (val: unknown): string | null => {
            if (!val) return null;
            if (val instanceof Date) return val.toISOString();
            if (typeof val === 'string') {
                // YYYY-MM-DD -> UTC midnight
                if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
                    const [y, m, d] = val.split('-').map(Number);
                    return new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0)).toISOString();
                }
                const parsed = new Date(val);
                return isNaN(parsed.getTime()) ? null : parsed.toISOString();
            }
            return null;
        };

        if (options.UserId != null) params = params.set('UserId', String(options.UserId));
        if (options.isCompleted != null) params = params.set('IsCompleted', String(options.isCompleted));
        if (options.Priority != null) params = params.set('Priority', String(options.Priority));
        const startIso = toIso(options.StartDate as any);
        if (startIso) params = params.set('StartDate', startIso);
        const endIso = toIso(options.EndDate as any);
        if (endIso) params = params.set('EndDate', endIso);
        if (options.CategoryId != null) params = params.set('CategoryId', String(options.CategoryId));

        const url = '/url/api/TaskItem/filtered-tasks';
        const key = `GET:${url}?${params.toString()}`;
        return this.fromCache<Response>(key, () => this.http.get<Response>(url, { params }));
    }

    getUpcomingTasks(userId: number, days?: number): Observable<Response> {
        const url = '/url/api/TaskItem/upcoming-tasks';
        const params = days
            ? new HttpParams().set('userid', userId.toString()).set('days', String(days))
            : new HttpParams().set('userid', userId.toString());
        const key = `GET:${url}?${params.toString()}`;
        return this.fromCache<Response>(key, () => this.http.get<Response>(url, { params }));
    }

    getOverdueTasks(userId: number): Observable<Response> {
        const url = '/url/api/TaskItem/overdue-tasks';
        const params = new HttpParams().set('userid', userId.toString());
        const key = `GET:${url}?${params.toString()}`;
        return this.fromCache<Response>(key, () => this.http.get<Response>(url, { params }));
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
        return this.http.delete<Response>(`/url/api/TaskItem/remove-category`, { body: assignment });
    }

    completeTask(todo: CompleteTodoRequest): Observable<Response> {
        return this.http.post<Response>(`/url/api/TaskItem/complete`, todo);
    }

    reopenTask(todo: ReOpenTodoRequest): Observable<Response> {
        return this.http.post<Response>(`/url/api/TaskItem/reopen`, todo);
    }

    getTasksByCategory(filter: GetTodosByCategoryRequest): Observable<Response> {
        const url = `/url/api/TaskItem/category/${filter.categoryId}`;
        const key = `GET:${url}`;
        return this.fromCache<Response>(key, () => this.http.get<Response>(url));
    }

}