import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { login, loginFailure, loginSuccess } from "../actions/auth.action";

import { Router } from "@angular/router";

@Injectable()
export class AuthEffect {
    login$;
    loginRedirect$;

    constructor(private actions$: Actions, private authService: AuthService, private router: Router) {
        this.login$ = createEffect(() =>
            this.actions$.pipe(
                ofType(login),
                mergeMap(action =>
                    this.authService.login(action.email, action.password).pipe(
                        map((response: any) => {
                            if (response && response.token && response.user) {
                                localStorage.setItem('currentUser', JSON.stringify(response.user));
                                localStorage.setItem('authToken', response.token);
                                return loginSuccess({ user: response.user, token: response.token });
                            } else {
                                return loginFailure({ error: 'Geçersiz kullanıcı veya token.' });
                            }
                        }),
                        catchError(error => of(loginFailure({ error })))
                    )
                )
            )
        );

        this.loginRedirect$ = createEffect(() =>
            this.actions$.pipe(
                ofType(loginSuccess),
                tap(() => {
                    this.router.navigate(['/app', 'dashboard']);
                })
            ),
            { dispatch: false }
        );
    }
}