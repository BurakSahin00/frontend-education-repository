import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequest, LoginRequest, UpdateUserRequest, User } from "../../features/todo/model/user.model";

export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {

        'Register': props<{ request: RegisterRequest }>(),
        'Register Success': emptyProps(),
        'Register Failure': props<{ error: string[] }>(),

        'Login': props<{ request: LoginRequest }>(),
        'Get Access Token': props<{ accessToken: string, userId: number }>(),
        'Login Success': props<{ user: User }>(),
        'Login Failure': props<{ error: string[] }>(),

        'Update User': props<{ request: UpdateUserRequest}>(),
        'Update User Success': props<{ user: User }>(),
        'Update User Failure': props<{ error: string[] }>(),

        'Delete User': props<{ userId: string }>(),
        'Delete User Success': emptyProps(),
        'Delete User Failure': props<{ error: string[] }>(),

        'Logout': emptyProps(),
        'Logout Success': emptyProps(),
        'Logout Failure': props<{ error: string[] }>(),
    }
});