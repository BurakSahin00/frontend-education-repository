import { createReducer, on } from "@ngrx/store";
import { login, loginFailure, loginSuccess, logout } from "../actions/auth.action";
import { initialAuthState } from "../models/auth.model";

export const authReducer = createReducer(
    initialAuthState,
    on(login, (state) => ({
        ...state
    })),
    on(loginSuccess, (state, { user, token }) => ({
        ...state,
        isAuthenticated: true,
        user,
        token
    })),
    on(loginFailure, (state, { error }) => ({
        ...state,
        isAuthenticated: false,
        error
    })),
    on(logout, (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
        token: null
    }))
);
