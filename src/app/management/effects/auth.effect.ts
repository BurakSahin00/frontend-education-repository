import { inject, Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { UserService } from "../../features/todo/service/user.service";
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from "rxjs";
import { AuthActions } from "../actions/auth.action";
import { ofType } from "@ngrx/effects";
import { User } from "../../features/todo/model/user.model";

@Injectable()
export class AuthEffect {

    private actions$ = inject(Actions);
    private auth = inject(UserService);
    private router = inject(Router);

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.register),
            exhaustMap(action =>
                this.auth.registerUser(action.request).pipe(
                    map(response => {
                        if (response.isSuccess) {
                            return AuthActions.registerSuccess();
                        }
                        return AuthActions.registerFailure({ error: response.errors });
                    }),
                    catchError(error => of(AuthActions.registerFailure({ error: error.message || 'Registration failed' })))
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
                        if (response.isSuccess && response.hasValue && typeof response.value === 'string') {
                            const accessToken = response.value;
                            return AuthActions.getAccessToken({ accessToken: accessToken });
                        }
                        return AuthActions.loginFailure({ error: response.errors });
                    }),
                    catchError(error => of(AuthActions.loginFailure({ error: error.message || 'Login failed' })))
                )
            )
        )
    );

    getUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.getAccessToken),
            exhaustMap(() =>
                this.auth.getUser().pipe(
                    map(userResponse => {
                        if (userResponse.isSuccess && userResponse.hasValue && userResponse.value) {
                            const user = userResponse.value as User;
                            return AuthActions.loginSuccess({ user: user });
                        }
                        return AuthActions.loginFailure({ error: userResponse.errors });
                    }),
                    catchError(error => of(AuthActions.loginFailure({ error: error.message || 'Fetching user failed' })))
                )
            )
        ),
        { dispatch: false }
    );

    loginRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(() => {
                this.router.navigate(['/app', '/dashboard']);
            })
        ),
        { dispatch: false }
    )

    registerRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.registerSuccess),
            tap(() => {
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
                            return AuthActions.deleteUserSuccess();
                        }
                        return AuthActions.deleteUserFailure({ error: response.errors });
                    }),
                    catchError(error => of(AuthActions.deleteUserFailure({ error: error.message || 'Delete user failed' })))
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
                            return AuthActions.updateUserSuccess({ user: user });
                        }
                        return AuthActions.updateUserFailure({ error: response.errors });
                    }),
                    catchError(error => of(AuthActions.updateUserFailure({ error: error.message || 'Update user failed' })))
                )
            )
        )
    );
    
}
