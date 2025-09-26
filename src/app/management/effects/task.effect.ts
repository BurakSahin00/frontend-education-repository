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
import { LoggingService } from "../../services/logging.service";

@Injectable()
export class TaskEffect {

    private actions$ = inject(Actions);
    private task = inject(TaskService);
    private category = inject(CategoryService);
    private store = inject(Store);
    private log = inject(LoggingService);

    loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadTasks),
            mergeMap(action =>
                this.task.getTodos(action.userId).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            this.log.info('Tasks loaded successfully.', response.value);
                            const tasks = (response.value as any) ?? [];
                            return TaskActions.loadTasksSuccess({ tasks });
                        }
                        this.log.error('Failed to load tasks.', response.errors);
                        return TaskActions.loadTasksFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error loading tasks.', error);
                        return of(TaskActions.loadTasksFailure({ error }));
                    })
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
                        this.log.info('Tasks loaded successfully.', tasks);
                        const categoryIds = Array.from(
                            new Set(
                                tasks.flatMap(task => task.categories?.map(c => c.id) || [])
                            )
                        );
                        if (categoryIds.length === 0) {
                            this.log.info('No categories found for tasks.');
                            return of(CategoryActions.getCategoriesFromTasksSuccess({ categories: [] }));
                        }
                        return forkJoin(
                            categoryIds.map(id =>
                                this.category.getCategoryById(id as any).pipe(
                                    map(response => response.isSuccess && response.hasValue ? response.value as Category : null)
                                )
                            )
                        ).pipe(
                            map(categories => {
                                this.log.info('Categories loaded successfully.', categories);
                                const validCategories = categories.filter(Boolean) as Category[];
                                return CategoryActions.getCategoriesFromTasksSuccess({ categories: validCategories });
                            }),
                            catchError(error => {
                                this.log.error('Error loading categories.', error);
                                return of(CategoryActions.getCategoriesFromTasksFailure({ error }));
                            })
                        );
                    })
                )
            )
        )
    );

    // Filter sonrası da kategori detaylarını yükle
    loadCategoriesAfterFilter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.filterTasksByCategorySuccess),
            switchMap(() =>
                this.store.select(selectAllTasks).pipe(
                    take(1),
                    switchMap(tasks => {
                        this.log.info('Tasks after category filter.', tasks);
                        const categoryIds = Array.from(new Set(tasks.flatMap(t => t.categories?.map(c => c.id) || [])));
                        if (categoryIds.length === 0) {
                            return of(CategoryActions.getCategoriesFromTasksSuccess({ categories: [] }));
                        }
                        return forkJoin(
                            categoryIds.map(id =>
                                this.category.getCategoryById(id as any).pipe(
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
        )
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
                            this.log.info('Task created successfully.', response.value);
                            const createdTask = response.value as any;
                            return TaskActions.addTaskSuccess({ task: createdTask });
                        }
                        this.log.error('Failed to create task.', response.errors);
                        return TaskActions.addTaskFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error creating task.', error);
                        return of(TaskActions.addTaskFailure({ error }));
                    })
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
                                this.log.info('Tasks filtered successfully.', response.value);
                                const filteredTasks = response.value as any;
                                let filteredBy: string[] | 'none' = [];

                                if (action.params.isCompleted !== undefined && action.params.isCompleted === true) {
                                    filteredBy.push('Completed');
                                } else if (action.params.isCompleted !== undefined && action.params.isCompleted === false) {
                                    filteredBy.push('Incomplete');
                                }

                                if (action.params.Priority !== undefined) {
                                    switch (action.params.Priority) {
                                        case 0:
                                            filteredBy.push(`Priority: Low`);
                                            break;
                                        case 1:
                                            filteredBy.push(`Priority: Medium`);
                                            break;
                                        case 2:
                                            filteredBy.push(`Priority: High`);
                                            break;
                                    }
                                }

                                if (action.params.StartDate !== undefined) {
                                    filteredBy.push(`StartDate: ${new Date(action.params.StartDate).toLocaleDateString()}`);
                                }

                                if (action.params.EndDate !== undefined) {
                                    filteredBy.push(`EndDate: ${new Date(action.params.EndDate).toLocaleDateString()}`);
                                }

                                if (action.params.CategoryId !== undefined) {
                                    filteredBy.push('Category: ' + action.params.CategoryId);
                                }

                                return TaskActions.filterTasksSuccess({ tasks: filteredTasks, filteredBy: filteredBy.length === 0 ? 'none' : filteredBy });
                            }
                        }
                        this.log.error('Failed to filter tasks.', response.errors);
                        return TaskActions.filterTasksFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error filtering tasks.', error);
                        return of(TaskActions.filterTasksFailure({ error }));
                    })
                )
            )
        )
    );

    overDueTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadOverdueTasks),
            mergeMap(action =>
                this.task.getOverdueTasks(action.request.userId).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            this.log.info('Overdue tasks loaded successfully.', response.value);
                            const overdueTasks = response.value as any;
                            return TaskActions.loadOverdueTasksSuccess({ tasks: overdueTasks });
                        }
                        this.log.error('Failed to load overdue tasks.', response.errors);
                        return TaskActions.loadOverdueTasksFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error loading overdue tasks.', error);
                        return of(TaskActions.loadOverdueTasksFailure({ error }));
                    })
                )
            )
        )
    );

    upcomingTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadUpcomingTasks),
            mergeMap(action =>
                this.task.getUpcomingTasks(action.request.userId, action.request.days).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            this.log.info('Upcoming tasks loaded successfully.', response.value);
                            const upcomingTasks = response.value as any;
                            return TaskActions.loadUpcomingTasksSuccess({ tasks: upcomingTasks });
                        }
                        this.log.error('Failed to load upcoming tasks.', response.errors);
                        return TaskActions.loadUpcomingTasksFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error loading upcoming tasks.', error);
                        return of(TaskActions.loadUpcomingTasksFailure({ error }));
                    })
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
                            this.log.info('Category assigned to task successfully.', response.value);
                            const updatedTask = response.value as any;
                            return TaskActions.assignCategorySuccess({ task: updatedTask });
                        }
                        this.log.error('Failed to assign category to task.', response.errors);
                        return TaskActions.assignCategoryFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error assigning category to task.', error);
                        return of(TaskActions.assignCategoryFailure({ error }));
                    })
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
                            this.log.info('Category unassigned from task successfully.', response.value);
                            const updatedTask = response.value as any;
                            return TaskActions.unassignCategorySuccess({ task: updatedTask });
                        }
                        this.log.error('Failed to unassign category from task.', response.errors);
                        return TaskActions.unassignCategoryFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error unassigning category from task.', error);
                        return of(TaskActions.unassignCategoryFailure({ error }));
                    })
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
                            this.log.info('Tasks filtered by category successfully.', response.value);
                            const filteredTasks = response.value as any;
                            return TaskActions.filterTasksByCategorySuccess({ tasks: filteredTasks, filteredBy: [`Category: ${action.request.categoryId}`] });
                        }
                        this.log.error('Failed to filter tasks by category.', response.errors);
                        return TaskActions.filterTasksByCategoryFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error filtering tasks by category.', error);
                        return of(TaskActions.filterTasksByCategoryFailure({ error }));
                    })
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
                            this.log.info('Task updated successfully.', response.value);
                            const updatedTask = response.value as any;
                            return TaskActions.updateTaskSuccess({ task: updatedTask });
                        }
                        this.log.error('Failed to update task.', response);
                        return TaskActions.updateTaskFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error updating task.', error);
                        return of(TaskActions.updateTaskFailure({ error }));
                    })
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
                            this.log.info('Task deleted successfully.', action.taskId);
                            return TaskActions.deleteTaskSuccess({ taskId: action.taskId });
                        }
                        this.log.error('Failed to delete task.', response.errors);
                        return TaskActions.deleteTaskFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error deleting task.', error);
                        return of(TaskActions.deleteTaskFailure({ error }));
                    })
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
                                this.log.info('Task completed successfully.', action.taskId);
                            return TaskActions.completeTaskSuccess({ taskId: Number(action.taskId.taskItemId) });
                        }
                        this.log.error('Failed to complete task.', response.errors);
                        return TaskActions.completeTaskFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error completing task.', error);
                        return of(TaskActions.completeTaskFailure({ error }));
                    })
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
                            this.log.info('Task reopened successfully.', action.taskId);
                            return TaskActions.reopenTaskSuccess({ taskId: Number(action.taskId.taskItemId) });
                        }
                        this.log.error('Failed to reopen task.', response.errors);
                        return TaskActions.reopenTaskFailure({ error: response.errors });
                    }),
                    catchError(error => {
                        this.log.error('Error reopening task.', error);
                        return of(TaskActions.reopenTaskFailure({ error }));
                    })
                )
            )
        )
    );
}
