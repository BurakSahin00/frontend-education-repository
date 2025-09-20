import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginRequest, RegisterRequest } from "../model/user.model";
import { UpdateUserRequest } from "../model/user.model";
import { Response } from "../../../features/todo/model/response.model";


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUser(): Observable<Response> {
        return this.http.get<Response>('/api/User');
    }

    registerUser(request: RegisterRequest): Observable<Response> {
        return this.http.post<Response>('/api/User', request);
    }

    updateUser(request: UpdateUserRequest): Observable<Response> {
        return this.http.put<Response>(`/api/User/${request.userId}`, request);
    }

    deleteUser(userId: number): Observable<Response> {
        return this.http.delete<Response>(`/api/User/${userId}`);
    }

    login(request: LoginRequest): Observable<Response> {
        return this.http.post<Response>('/api/Authentication/login', request);
    }
}