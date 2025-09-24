import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginRequest, RegisterRequest } from "../model/user.model";
import { UpdateUserRequest } from "../model/user.model";
import { Response } from "../../../features/todo/model/response.model";
import { environment } from "../../../environment/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    private readonly API_URL = environment.apiUrl;

    getUser(userId: number): Observable<Response> {
        return this.http.get<Response>(`${this.API_URL}/api/User/${userId}`);
    }

    registerUser(request: RegisterRequest): Observable<Response> {
        return this.http.post<Response>(`${this.API_URL}/api/User`, request);
    }

    updateUser(request: UpdateUserRequest): Observable<Response> {
        return this.http.put<Response>(`${this.API_URL}/api/User/${request.userId}`, request);
    }

    deleteUser(userId: number): Observable<Response> {
        return this.http.delete<Response>(`${this.API_URL}/api/User/${userId}`);
    }

    login(request: LoginRequest): Observable<Response> {
        return this.http.post<Response>(`${this.API_URL}/api/Authentication/login`, request);
    }
}