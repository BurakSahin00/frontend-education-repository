import { createFeature, createReducer } from '@ngrx/store';
import { AuthState } from '../states/auth.state';
import { on } from '@ngrx/store';
import { AuthActions } from '../actions/auth.action';

const initialState: AuthState = {
    status: 'anonymous',
    error: null,
    currentUser: null,
    loading: {
        registering: false,
        verifying: false,
        resending: false
    },
    verification: null,
};

export const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,

        on(AuthActions.loginRequested, (state) => ({
            ...state,
            status: 'verifying' as const,
            loading: {
                ...state.loading,
                verifying: true
            }
        })),
        on(AuthActions.loginSucceeded, (state, { user }) => ({
            ...state,
            status: 'authenticated' as const,
            currentUser: user,
            loading: {
                ...state.loading,
                verifying: false
            }
        })),
        on(AuthActions.loginFailed, (state, { error }) => ({
            ...state,
            status: 'error' as const,
            error
        })),
        on(AuthActions.registerRequested, (state) => ({
            ...state,
            status: 'registering' as const,
            error: null,
            loading: { ...state.loading, registering: true },
        })),
        on(AuthActions.registerSucceeded, (state, { verificationId, email, resendDelaySec, attemptsLeft }) => ({
            ...state,
            status: 'awaitingVerification' as const,
            error: null,
            loading: { ...state.loading, registering: false },
            verification: { verificationId, email, resendInSec: resendDelaySec, attemptsLeft }
        })),
        on(AuthActions.registerFailed, (state, { error }) => ({
            ...state,
            status: 'error' as const,
            error,
            loading: { ...state.loading, registering: false },
            verification: null,
        })),
        on(AuthActions.mailVerificationRequested, (state) => ({
            ...state,
            status: 'verifying' as const,
            error: null,
            loading: { ...state.loading, verifying: true },
        })),
        on(AuthActions.mailVerificationSucceeded, (state, { user }) => ({
            ...state,
            status: 'authenticated' as const,
            error: null,
            currentUser: user,
            loading: { ...state.loading, verifying: false },
            verification: null,
        })),
        on(AuthActions.mailVerificationFailed, (state, { error }) => ({
            ...state,
            status: 'awaitingVerification' as const, // akışa geri dön
            error,
            loading: { ...state.loading, verifying: false },
        })),
        on(AuthActions.resentVerificationRequested, (state) => ({
            ...state,
            loading: { ...state.loading, resending: true },
            error: null,
        })),
        on(AuthActions.resentVerificationSucceeded, (state, { resentDelay }) => ({
            ...state,
            status: 'authenticated' as const,
            loading: { ...state.loading, resending: false },
            verification: state.verification
                ? { ...state.verification, resendInSec: resentDelay }
                : state.verification,
        })),
        on(AuthActions.resentVerificationFailed, (state, { error }) => ({
            ...state,
            loading: { ...state.loading, resending: false },
            error,
        })),
        on(AuthActions.resentCountdownStarted, (state, { countdown }) => ({
            ...state,
            verification: state.verification
                ? { ...state.verification, resendInSec: countdown }
                : state.verification,
        })),
        on(AuthActions.resentCountdownTick, (state) => ({
            ...state,
            verification: state.verification
                ? { ...state.verification, resendInSec: Math.max(0, state.verification.resendInSec - 1) }
                : state.verification,
        })),
        on(AuthActions.resentCountdownFinished, (state) => ({
            ...state,
            verification: state.verification
                ? { ...state.verification, resendInSec: 0 }
                : state.verification,
        })),
        on(AuthActions.logoutRequested, (state) => ({
            ...state
        })),
        on(AuthActions.logoutSucceeded, (state) => ({
            ...state,
            status: 'anonymous' as const,
            currentUser: null,
            verification: null,
        })),
        on(AuthActions.logoutFailed, (state, { error }) => ({
            ...state,
            error
        }))
    )
});
