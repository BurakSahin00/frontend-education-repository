import { inject, Injectable } from "@angular/core";
import { Actions, createEffect } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from "rxjs";
import { AuthActions } from "../actions/auth.action";
import { ofType } from "@ngrx/effects";

@Injectable()
export class AuthEffect {

    private actions$ = inject(Actions);
    private authService = inject(AuthService);
    private router = inject(Router);
    private store = inject(Store);

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.registerRequested),
            exhaustMap(({ email, password, name, surname }) =>
                this.authService.register({ email, password, name, surname }).pipe(
                    mergeMap((res) => [
                        AuthActions.registerSucceeded({
                            verificationId: res.verificationId,
                            email: res.email,
                            resendDelaySec: res.resendDelaySec,
                            attemptsLeft: res.attemptsLeft,
                        }),
                        AuthActions.resentCountdownStarted({ countdown: res.resendDelaySec }),
                    ]),
                    catchError((err) =>
                        of(AuthActions.registerFailed({ error: err?.error?.message ?? err?.message ?? 'Register failed' }))
                    )
                )
            )
        )
    );

    verifyEmail$ = createEffect(() => 
        this.actions$.pipe(
            ofType(AuthActions.mailVerificationRequested),
            switchMap(({ verificationId, code }) =>
                this.authService.verifyEmail(verificationId, code).pipe(
                    map((res) => AuthActions.mailVerificationSucceeded({ user: res.user })),
                    catchError((err) =>
                        of(AuthActions.mailVerificationFailed({ error: err?.error?.message ?? err?.message ?? 'Verification failed' }))
                    )
                )
            )
        )
    );

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginRequested),
            exhaustMap(({ email, password }) =>
                this.authService.login(email, password).pipe(
                    map((res) => AuthActions.loginSucceeded({ user: res.user, token: res.token })),
                    catchError((err) =>
                        of(AuthActions.loginFailed({ error: err?.error?.message ?? err?.message ?? 'Login failed' }))
                    )
                )
            )
        )
    );

    loginRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.loginSucceeded),
            tap(() => {
                this.router.navigate(['/app', 'dashboard']);
            })
        ),
        { dispatch: false }
    )

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logoutRequested),
            tap(() => {
                this.store.dispatch(AuthActions.logoutSucceeded());
            })
        )
    )

    logoutRedirect$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logoutSucceeded),
            tap(() => {
                this.router.navigate(['']);
            })
        ),
        { dispatch: false }
    )
    
}