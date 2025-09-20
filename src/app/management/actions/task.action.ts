import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { AssignTodoRequest, CompleteTodoRequest, CreateTodoRequest, GetTodosByCategoryRequest, ReOpenTodoRequest, Todo, UnassignTodoRequest, UpdateTodoRequest } from '../../features/todo/model/todo.model';

export const TaskActions = createActionGroup({
    source: 'Task',
    events: {

        'Load Tasks': props<{ userId: number }>(),
        'Load Tasks Success': props<{ tasks: Todo[] }>(),
        'Load Tasks Failure': props<{ error: any }>(),

        'Load Overdue Tasks': props<{ userId: number }>(),
        'Load Overdue Tasks Success': props<{ tasks: Todo[] }>(),
        'Load Overdue Tasks Failure': props<{ error: any }>(),

        'Load Upcoming Tasks': props<{ userId: number, days?: number }>(),
        'Load Upcoming Tasks Success': props<{ tasks: Todo[] }>(),
        'Load Upcoming Tasks Failure': props<{ error: any }>(),

        'Filter Tasks': props<{ params : { userId: number, isCompleted?: boolean, priority?: string, startDate?: Date, endDate?: Date, categoryId?: number } }>(),
        'Filter Tasks Success': props<{ tasks: Todo[], filteredBy: string[] | 'none' }>(),
        'Filter Tasks Failure': props<{ error: any }>(),

        'Filter Tasks By Category': props<{ request: GetTodosByCategoryRequest }>(),
        'Filter Tasks By Category Success': props<{ tasks: Todo[], filteredBy: string[] | 'none' }>(),
        'Filter Tasks By Category Failure': props<{ error: any }>(),

        'Add Task': props<{ task: CreateTodoRequest }>(),
        'Add Task Success': props<{ task: Todo }>(),
        'Add Task Failure': props<{ error: any }>(),

        'Update Task': props<{ task: UpdateTodoRequest, taskId: number }>(),
        'Update Task Success': props<{ task: Todo }>(),
        'Update Task Failure': props<{ error: any }>(),

        'Delete Task': props<{ taskId: string }>(),
        'Delete Task Success': props<{ taskId: string }>(),
        'Delete Task Failure': props<{ error: any }>(),

        'Complete Task': props<{ taskId: CompleteTodoRequest }>(),
        'Complete Task Success': props<{ taskId: number }>(),
        'Complete Task Failure': props<{ error: any }>(),

        'Reopen Task': props<{ taskId: ReOpenTodoRequest }>(),
        'Reopen Task Success': props<{ taskId: number }>(),
        'Reopen Task Failure': props<{ error: any }>(),

        //Reducer a eklenmeli
        'Assign Category': props<{ request: AssignTodoRequest}>(),
        'Assign Category Success': props<{ task: Todo }>(),
        'Assign Category Failure': props<{ error: any }>(),

        //Reducer a eklenmeli
        'Unassign Category': props<{ request: UnassignTodoRequest }>(),
        'Unassign Category Success': props<{ task: Todo }>(),
        'Unassign Category Failure': props<{ error: any }>(),
    }
});