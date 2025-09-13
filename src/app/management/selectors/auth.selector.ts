import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../../management/states/auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectStatus = createSelector(
    selectAuthState,
    (state) => state.status
);

export const selectError = createSelector(
    selectAuthState,
    (state) => state.error
);

export const selectUser = createSelector(
    selectAuthState,
    (state) => state.currentUser
);