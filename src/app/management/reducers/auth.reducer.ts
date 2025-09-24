import { AuthState } from "../states/auth.state";
import { createReducer, on } from "@ngrx/store";
import { AuthActions } from "../actions/auth.action";


const initialAuthState: AuthState = {
    status: 'anonymous',
    error: null,
    currentUser: null,
    accessToken: null,
    id: null,
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
        status: 'registering' as const,
        loading: { ...state.loading, registering: true }
    })),
    on(AuthActions.registerSuccess, (state) => ({
        ...state,
        status: 'anonymous' as const,
        loading: { ...state.loading, registering: false }
    })),
    on(AuthActions.registerFailure, (state, { error }) => ({
        ...state,
        status: 'anonymous' as const,
        error: Array.isArray(error) ? error : [error]
    })),
    on(AuthActions.login, (state) => ({
        ...state,
        status: 'loggingIn' as const,
        loading: { ...state.loading, loggingIn: true }
    })),
    on(AuthActions.getAccessToken, (state, { accessToken, userId }) => ({
        ...state,
        accessToken: accessToken,
        id: userId
    })),
    on(AuthActions.loginSuccess, (state, { user }) => ({
        ...state,
        status: 'authenticated' as const,
        currentUser: user,
    })),
    on(AuthActions.loginFailure, (state, { error }) => ({
        ...state,
        status: 'anonymous' as const,
        error: Array.isArray(error) ? error : [error]
    })),
    on(AuthActions.updateUser, (state) => ({
        ...state,
        status: 'updating' as const,
        loading: { ...state.loading, updating: true }
    })),
    on(AuthActions.updateUserSuccess, (state, { user }) => ({
        ...state,
        status: 'authenticated' as const,
        currentUser: user,
    })),
    on(AuthActions.updateUserFailure, (state, { error }) => ({
        ...state,
        status: 'anonymous' as const,
        error: Array.isArray(error) ? error : [error]
    })),
    on(AuthActions.deleteUser, (state) => ({
        ...state,
        status: 'deleting' as const,
        loading: { ...state.loading, deleting: true }
    })),
    on(AuthActions.deleteUserSuccess, (state) => ({
        ...state,
        status: 'anonymous' as const,
        currentUser: null,
        accessToken: null
    })),
    on(AuthActions.deleteUserFailure, (state, { error }) => ({
        ...state,
        status: 'authenticated' as const,
        error: Array.isArray(error) ? error : [error]
    })),
    on(AuthActions.logout, (state) => ({
        ...state,
        status: 'loggingOut' as const,
        loading: { ...state.loading, loggingOut: true }
    })),
    on(AuthActions.logoutSuccess, (state) => ({
        ...state,
        status: 'anonymous' as const,
        currentUser: null,
        accessToken: null
    })),
    on(AuthActions.logoutFailure, (state, { error }) => ({
        ...state,
        status: 'authenticated' as const,
        error: Array.isArray(error) ? error : [error]
    }))
);