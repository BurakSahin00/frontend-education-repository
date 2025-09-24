import { inject, Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { jwtDecode } from "jwt-decode";
import { Router } from "@angular/router";
import { UserService } from "../../features/todo/service/user.service";
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap, withLatestFrom } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';
import { AuthActions } from "../actions/auth.action";
import { ofType } from "@ngrx/effects";
import { User } from "../../features/todo/model/user.model";
import { LoggingService } from "../../services/logging.service";
import { Store } from "@ngrx/store";
import { selectUserId } from "../selectors/auth.selector";

@Injectable()
export class AuthEffect {

    private actions$ = inject(Actions);
    private auth = inject(UserService);
    private router = inject(Router);
    private log = inject(LoggingService)
    private store = inject(Store);

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.register),
            exhaustMap(action =>
                this.auth.registerUser(action.request).pipe(
                    map(response => {
                        if (response.isSuccess) {
                            this.log.info('User registered successfully.');
                            return AuthActions.registerSuccess();
                        }
                        this.log.error('User registration failed.', response.errors);
                        return AuthActions.registerFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('User registration error.', error);
                        return of(AuthActions.registerFailure({ error: error.message || 'Registration failed' }));
                    })
                )
            )
        )
    );

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            exhaustMap(action =>
                this.auth.login(action.request).pipe(
                    map(response => {
                        this.log.info('Login response received.', response);
                        if (response.isSuccess && response.hasValue && typeof response.value === 'string') {
                            const accessToken = response.value;
                            const decoded = jwtDecode<any>(accessToken);
                            const userId = decoded.UserId;
                            this.log.info('User logged in successfully.');
                            this.log.info('Access Token:', accessToken);
                            return AuthActions.getAccessToken({ accessToken: accessToken, userId: userId });
                        }
                        this.log.error('User login failed.', response.errors);
                        return AuthActions.loginFailure({ error: response.errors });
                    }),
                    catchError((error: HttpErrorResponse) => {
                        let errMsg: string[] = [];
                        // Try to pull server error details
                        if (error.error) {
                            if (typeof error.error === 'string') {
                                errMsg = [error.error];
                            } else if (Array.isArray(error.error)) {
                                errMsg = error.error as string[];
                            } else if (typeof error.error === 'object') {
                                // Common patterns: { errors: string[] } or { message: string }
                                const anyErr = error.error as any;
                                if (Array.isArray(anyErr.errors)) {
                                    errMsg = anyErr.errors;
                                } else if (anyErr.message) {
                                    errMsg = [anyErr.message];
                                }
                            }
                        }
                        if (errMsg.length === 0) errMsg = [error.message || 'Login failed'];
                        this.log.error('User login error. (catchError)', errMsg);
                        return of(AuthActions.loginFailure({ error: errMsg }));
                    })
                )
            )
        )
    );

    getUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.getAccessToken),
            withLatestFrom(this.store.select(selectUserId)),
            exhaustMap(([action, userIdFromStore]) => {
                const id = userIdFromStore ?? (action as any).userId;
                if (id == null) {
                    this.log.error('Fetching user failed. No userId found in store or action payload.');
                    return of(AuthActions.loginFailure({ error: ['User id is missing'] }));
                }
                return this.auth.getUser(Number(id)).pipe(
                    map(userResponse => {
                        if (userResponse.isSuccess && userResponse.hasValue && userResponse.value) {
                            const user = userResponse.value as User;
                            this.log.info('User fetched successfully.');
                            return AuthActions.loginSuccess({ user: user });
                        }
                        this.log.error('Fetching user failed.', userResponse.errors);
                        return AuthActions.loginFailure({ error: userResponse.errors });
                    }),
                    catchError((error: HttpErrorResponse) => {
                        let errMsg: string[] = [];
                        if (error.error) {
                            if (typeof error.error === 'string') {
                                errMsg = [error.error];
                            } else if (Array.isArray(error.error)) {
                                errMsg = error.error as string[];
                            } else if (typeof error.error === 'object') {
                                const anyErr = error.error as any;
                                if (Array.isArray(anyErr.errors)) {
                                    errMsg = anyErr.errors;
                                } else if (anyErr.message) {
                                    errMsg = [anyErr.message];
                                }
                            }
                        }
                        if (errMsg.length === 0) errMsg = [error.message || 'Fetching user failed'];
                        this.log.error('Fetching user error.', errMsg);
                        return of(AuthActions.loginFailure({ error: errMsg }));
                    })
                );
            })
        )
    );

    loginRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(() => {
                this.log.info('User login redirect.');
                this.router.navigate(['/app', 'dashboard']);
            })
        ),
        { dispatch: false }
    )

    registerRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.registerSuccess),
            tap(() => {
                this.log.info('User register redirect.');
                this.router.navigate(['/login']);
            })
        ),
        { dispatch: false }
    );

    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.deleteUser),
            mergeMap(action =>
                this.auth.deleteUser(Number(action.userId)).pipe(
                    map(response => {
                        if (response.isSuccess) {
                            this.log.info('User deleted successfully.');
                            return AuthActions.deleteUserSuccess();
                        }
                            this.log.error('User deletion failed.', response.errors);
                        return AuthActions.deleteUserFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('User deletion error.', error);
                        return of(AuthActions.deleteUserFailure({ error: error.message || 'Delete user failed' }));
                    })
                )
            )
        )
    );

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.updateUser),
            mergeMap(action =>
                this.auth.updateUser(action.request).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue && response.value) {
                            const user = response.value as User;
                            this.log.info('User updated successfully.');
                            return AuthActions.updateUserSuccess({ user: user });
                        }
                        this.log.error('User update failed.', response.errors);
                        return AuthActions.updateUserFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('User update error.', error);
                        return of(AuthActions.updateUserFailure({ error: error.message || 'Update user failed' }));
                    })
                )
            )
        )
    );
    
}
