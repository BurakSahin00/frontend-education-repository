import { AuthState } from "../states/auth.state";
import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions/auth.action";


const initialAuthState: AuthState = {
    status: 'anonymous',
    error: null,
    currentUser: null,
    accessToken: null,
    loading: {
        registering: false,
        verifying: false,
        resending: false,
        deleting: false,
        updating: false,
        loggingIn: false,
        loggingOut: false
    }
};

export const authFeature = createReducer(
    initialAuthState,
    on(AuthActions.register, (state) => ({
        ...state,
        status: 'registering',
        loading: { ...state.loading, registering: true }
    })),
    on(AuthActions.registerSuccess, (state) => ({
        ...state,
        status: 'anonymous',
        loading: { ...state.loading, registering: false }
    })),
    on(AuthActions.registerFailure, (state, { error }) => ({
        ...state,
        status: 'anonymous',
        error: Array.isArray(error) ? error : [error]
    })),
    on(AuthActions.login, (state) => ({
        ...state,
        status: 'loggingIn',
        loading: { ...state.loading, loggingIn: true }
    })),
    on(AuthActions.getAccessToken, (state, { accessToken }) => ({
        ...state,
        accessToken: accessToken
    })),
    on(AuthActions.loginSuccess, (state, { user }) => ({
        ...state,
        status: 'authenticated',
        currentUser: user,
    })),
    on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        status: 'anonymous',
        error: Array.isArray(error) ? error : [error]
    })),
    on(AuthActions.updateUser, (state) => ({
        ...state,
        status: 'updating',
        loading: { ...state.loading, updating: true }
    })),
    on(AuthActions.updateUserSuccess, (state, { user }) => ({
        ...state,
        status: 'authenticated',
        currentUser: user,
    })),
    on(AuthActions.updateUserFailure, (state, { error }) => ({
        ...state,
        status: 'anonymous',
        error: Array.isArray(error) ? error : [error]
    })),
    on(AuthActions.deleteUser, (state) => ({
        ...state,
        status: 'deleting',
        loading: { ...state.loading, deleting: true }
    })),
    on(AuthActions.deleteUserSuccess, (state) => ({
        ...state,
        status: 'anonymous',
        currentUser: null,
        accessToken: null
    })),
    on(AuthActions.deleteUserFailure, (state, { error }) => ({
        ...state,
        status: 'authenticated',
        error: Array.isArray(error) ? error : [error]
    })),
    on(AuthActions.logout, (state) => ({
        ...state,
        status: 'loggingOut',
        loading: { ...state.loading, loggingOut: true }
    })),
    on(AuthActions.logoutSuccess, (state) => ({
        ...state,
        status: 'anonymous',
        currentUser: null,
        accessToken: null
    })),
    on(AuthActions.logoutFailure, (state, { error }) => ({
        ...state,
        status: 'authenticated',
        error: Array.isArray(error) ? error : [error]
    }))
);