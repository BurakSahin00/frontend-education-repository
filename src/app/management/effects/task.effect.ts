import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../../features/todo/service/task.service";
import { Store } from "@ngrx/store";
import { TaskActions } from "../actions/task.action";
import { mergeMap, map, catchError, switchMap, take } from "rxjs/operators";
import { of, forkJoin } from "rxjs";
import { selectAllTasks } from "../selectors/task.selector";
import { Category } from "../../features/todo/model/category.model";
import { CategoryService } from "../../features/todo/service/category.service";
import { CategoryActions } from "../actions/category.actions";

@Injectable()
export class TaskEffect {

    private actions$ = inject(Actions);
    private task = inject(TaskService);
    private category = inject(CategoryService);
    private store = inject(Store);

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadTasks),
            mergeMap(action =>
                this.task.getTodos(action.userId).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasErrors) {
                            const tasks = response.value as any;
                            return TaskActions.loadTasksSuccess({ tasks });
                        }
                        return TaskActions.loadTasksFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.loadTasksFailure({ error })))
                )
            )
        )
    );

    loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadTasksSuccess),
            switchMap(() =>
                this.store.select(selectAllTasks).pipe(
                    take(1),
                    switchMap(tasks => {
                        const categoryIds = Array.from(
                            new Set(
                                tasks.flatMap(task => task.categories?.map(c => c.id) || [])
                            )
                        );
                        if (categoryIds.length === 0) {
                            return of(CategoryActions.getCategoriesFromTasksSuccess({ categories: [] }));
                        }
                        return forkJoin(
                            categoryIds.map(id =>
                                this.category.getCategoryById(Number(id)).pipe(
                                    map(response => response.isSuccess && response.hasValue ? response.value as Category : null)
                                )
                            )
                        ).pipe(
                            map(categories => {
                                const validCategories = categories.filter(Boolean) as Category[];
                                return CategoryActions.getCategoriesFromTasksSuccess({ categories: validCategories });
                            }),
                            catchError(error => of(CategoryActions.getCategoriesFromTasksFailure({ error })))
                        );
                    })
                )
            )
        ),
        { dispatch: false }
    );

    addTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.addTask),
            mergeMap(action =>
                this.task.createTask({
                    title: action.task.title,
                    description: action.task.description,
                    dueDate: action.task.dueDate,
                    priority: action.task.priority,
                    userId: action.task.userId
                }).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            const createdTask = response.value as any;
                            return TaskActions.addTaskSuccess({ task: createdTask });
                        }
                        return TaskActions.addTaskFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.addTaskFailure({ error })))
                )
            )
        )
    );

    filterTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.filterTasks),
            mergeMap(action =>
                this.task.getFilteredTasks(action.params).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            {
                                const filteredTasks = response.value as any;
                                let filteredBy: string[] | 'none' = [];

                                if (action.params.isCompleted !== undefined && action.params.isCompleted === true) {
                                    filteredBy.push('Completed');
                                } else if (action.params.isCompleted !== undefined && action.params.isCompleted === false) {
                                    filteredBy.push('Incomplete');
                                }

                                if (action.params.priority !== undefined) {
                                    switch (action.params.priority) {
                                        case '0':
                                            filteredBy.push(`Priority: Low`);
                                            break;
                                        case '1':
                                            filteredBy.push(`Priority: Medium`);
                                            break;
                                        case '2':
                                            filteredBy.push(`Priority: High`);
                                            break;
                                    }
                                }

                                if (action.params.startDate !== undefined) {
                                    filteredBy.push(`StartDate: ${new Date(action.params.startDate).toLocaleDateString()}`);
                                }

                                if (action.params.endDate !== undefined) {
                                    filteredBy.push(`EndDate: ${new Date(action.params.endDate).toLocaleDateString()}`);
                                }

                                if (action.params.categoryId !== undefined) {
                                    filteredBy.push('Category: ' + action.params.categoryId);
                                }

                                return TaskActions.filterTasksSuccess({ tasks: filteredTasks, filteredBy: filteredBy.length === 0 ? 'none' : filteredBy });
                            }
                        }
                        return TaskActions.filterTasksFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.filterTasksFailure({ error })))
                )
            )
        )
    );

    overDueTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadOverdueTasks),
            mergeMap(action =>
                this.task.getOverdueTasks(action.userId).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            const overdueTasks = response.value as any;
                            return TaskActions.loadOverdueTasksSuccess({ tasks: overdueTasks });
                        }
                        return TaskActions.loadOverdueTasksFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.loadOverdueTasksFailure({ error })))
                )
            )
        )
    );

    upcomingTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadUpcomingTasks),
            mergeMap(action =>
                this.task.getUpcomingTasks(action.userId, action.days).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            const upcomingTasks = response.value as any;
                            return TaskActions.loadUpcomingTasksSuccess({ tasks: upcomingTasks });
                        }
                        return TaskActions.loadUpcomingTasksFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.loadUpcomingTasksFailure({ error })))
                )
            )
        )
    );

    assignCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.assignCategory),
            mergeMap(action =>
                this.task.assignCategory(action.request).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            const updatedTask = response.value as any;
                            return TaskActions.assignCategorySuccess({ task: updatedTask });
                        }
                        return TaskActions.assignCategoryFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.assignCategoryFailure({ error })))
                )
            )
        )
    );

    unassignCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.unassignCategory),
            mergeMap(action =>
                this.task.unassignCategory(action.request).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            const updatedTask = response.value as any;
                            return TaskActions.unassignCategorySuccess({ task: updatedTask });
                        }
                        return TaskActions.unassignCategoryFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.unassignCategoryFailure({ error })))
                )
            )
        )
    );

    filterTasksByCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.filterTasksByCategory),
            mergeMap(action =>
                this.task.getTasksByCategory(action.request).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            const filteredTasks = response.value as any;
                            return TaskActions.filterTasksByCategorySuccess({ tasks: filteredTasks, filteredBy: [`Category: ${action.request.categoryId}`] });
                        }
                        return TaskActions.filterTasksByCategoryFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.filterTasksByCategoryFailure({ error })))
                )
            )
        )
    );

    updateTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.updateTask),
            mergeMap(action =>
                this.task.updateTask(action.task, action.taskId).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            const updatedTask = response.value as any;
                            return TaskActions.updateTaskSuccess({ task: updatedTask });
                        }
                        return TaskActions.updateTaskFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.updateTaskFailure({ error })))
                )
            )
        )
    );

    deleteTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.deleteTask),
            mergeMap(action =>
                this.task.deleteTask(Number(action.taskId)).pipe(
                    map(response => {
                        if (response.isSuccess) {
                            return TaskActions.deleteTaskSuccess({ taskId: action.taskId });
                        }
                        return TaskActions.deleteTaskFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.deleteTaskFailure({ error })))
                )
            )
        )
    );

    completeTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.completeTask),
            mergeMap(action =>
                this.task.completeTask(action.taskId).pipe(
                    map(response => {
                        if (response.isSuccess) {
                            return TaskActions.completeTaskSuccess({ taskId: Number(action.taskId.id) });
                        }
                        return TaskActions.completeTaskFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.completeTaskFailure({ error })))
                )
            )
        )
    );

    reOpenTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.reopenTask),
            mergeMap(action =>
                this.task.reopenTask(action.taskId).pipe(
                    map(response => {
                        if (response.isSuccess) {
                            return TaskActions.reopenTaskSuccess({ taskId: Number(action.taskId.id) });
                        }
                        return TaskActions.reopenTaskFailure({ error: response.errors });
                    }),
                    catchError(error => of(TaskActions.reopenTaskFailure({ error })))
                )
            )
        )
    )
}
