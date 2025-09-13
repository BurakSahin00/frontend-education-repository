import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import { User } from '../../models/user.model';

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        'Login Requested': props<{ email: string; password: string }>(),
        'Login Succeeded': props<{ user: any; token: string }>(),
        'Login Failed': props<{ error: any }>(),

        'Register Requested': props<{ email: string; password: string; name: string; surname: string }>(),
        'Register Succeeded': props<{ verificationId: string; email: string; resendDelaySec: number; attemptsLeft?: number }>(),
        'Register Failed': props<{ error: any }>(),

        'Mail Verification Requested': props<{ verificationId: string; code: string }>(),
        'Mail Verification Succeeded': props<{ user: User }>(),
        'Mail Verification Failed': props<{ error: any }>(),

        'Resent Verification Requested': props<{ verificationId: string }>(),
        'Resent Verification Succeeded': props<{ resentDelay: number }>(),
        'Resent Verification Failed': props<{ error: any }>(),

        'Resent Countdown Started': props<{ countdown: number }>(),
        'Resent Countdown Tick': emptyProps(),
        'Resent Countdown Finished': emptyProps(),

        'Logout Requested': emptyProps(),
        'Logout Succeeded': emptyProps(),
        'Logout Failed': props<{ error: any }>()
    }
});