import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { CategoryService } from "../../features/todo/service/category.service";
import { CategoryActions } from "../actions/category.actions";
import { Category } from "../../features/todo/model/category.model";
import { LoggingService } from "../../services/logging.service";
import { Router } from "@angular/router";


@Injectable()
export class CategoryEffect {
    
    private actions$ = inject(Actions)
    private category = inject(CategoryService)
    private log = inject(LoggingService)
    private router = inject(Router)

    addCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.createCategory),
            mergeMap(action =>
                this.category.addCategory(action.request).pipe(
                    map(response => {
                        if (response && response.isSuccess && response.hasValue) {
                            this.log.info('Category created successfully.', response.value);
                            return CategoryActions.createCategorySuccess({ category: response.value as Category});
                        }
                        this.log.error('Failed to create category.', response?.errors);
                        return CategoryActions.createCategoryFailure({ error: response?.errors || ['Empty or invalid response'] });
                    }),
                    catchError(error => {
                        this.log.error('Error creating category.', error);
                        return of(CategoryActions.createCategoryFailure({ error: [error.message || 'Unknown error'] }))
                    })
                )
            )
        )
    );

    updateCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.updateCategory),
            mergeMap(action =>
                this.category.updateCategory(action.request).pipe(
                    mergeMap(response => {
                        // Success with value
                        if (response && response.isSuccess && response.hasValue) {
                            this.log.info('Category updated successfully.', response.value);
                            return of(CategoryActions.updateCategorySuccess({ category: response.value as Category }));
                        }
                        // Some backends return 204 No Content (null body) or success without value; refetch the entity
                        if (!response || (response.isSuccess && !response.hasValue)) {
                            this.log.info('Update returned empty body, refetching category by id...', action.request.id);
                            return this.category.getCategoryById(action.request.id).pipe(
                                map(refetch => {
                                    if (refetch && refetch.isSuccess && refetch.hasValue) {
                                        this.log.info('Category refetched after update.', refetch.value);
                                        return CategoryActions.updateCategorySuccess({ category: refetch.value as Category });
                                    }
                                    this.log.error('Refetch after update failed or empty.', refetch?.errors);
                                    return CategoryActions.updateCategoryFailure({ error: refetch?.errors || ['Empty response after update'] });
                                }),
                                catchError(err => {
                                    this.log.error('Error refetching category after update.', err);
                                    return of(CategoryActions.updateCategoryFailure({ error: [err.message || 'Unknown error'] }));
                                })
                            );
                        }
                        // Explicit failure case with errors
                        this.log.error('Failed to update category.', response?.errors);
                        return of(CategoryActions.updateCategoryFailure({ error: response?.errors || ['Empty or invalid response'] }));
                    }),
                    catchError(error => {
                        this.log.error('Error updating category.', error);
                        return of(CategoryActions.updateCategoryFailure({ error: [error.message || 'Unknown error'] }))
                    })
                )
            )
        )
    );

    // Navigate back to main todos after successful delete
    navigateAfterDelete$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(CategoryActions.deleteCategorySuccess),
                map(() => {
                    this.router.navigate(["/app/todos"]);
                })
            ),
        { dispatch: false }
    );

    deleteCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.deleteCategory),
            mergeMap(action =>
                this.category.deleteCategory(action.request).pipe(
                    map(response => {
                        // Some APIs return 204 No Content; treat undefined/null or explicit success as success
                        if (!response || response.isSuccess) {
                            this.log.info('Category deleted successfully.', action.request.id);
                            return CategoryActions.deleteCategorySuccess({ id: action.request.id });
                        }
                        this.log.error('Failed to delete category.', response?.errors);
                        return CategoryActions.deleteCategoryFailure({ error: response?.errors || ['Empty or invalid response'] });
                    }),
                    catchError(error => {
                        this.log.error('Error deleting category.', error);
                        return of(CategoryActions.deleteCategoryFailure({ error: [error.message || 'Unknown error'] }))
                    })
                )
            )
        )
    );

    getCategoriesByTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.getCategoriesByTask),
            mergeMap(action =>
                this.category.getCategoriesByTaskId(action.request).pipe(
                    map(response => {
                        if (response && response.isSuccess && response.hasValue) {
                            this.log.info('Fetched categories by task successfully.', action.request.taskId);
                            return CategoryActions.getCategoriesByTaskSuccess();
                        }
                        this.log.error('Failed to fetch categories by task.', response?.errors);
                        return CategoryActions.getCategoriesByTaskFailure({ error: response?.errors || ['Empty or invalid response'] });
                    }),
                    catchError(error => {
                        this.log.error('Error fetching categories by task.', error);
                        return of(CategoryActions.getCategoriesByTaskFailure({ error: [error.message || 'Unknown error'] }))
                    })
                )
            )
        )
    );

    loadAllCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.loadAllCategories),
            mergeMap(() =>
                this.category.getCategories().pipe(
                    map(response => {
                        if (response && response.isSuccess && response.hasValue) {
                            this.log.info('All categories loaded.', response.value);
                            return CategoryActions.loadAllCategoriesSuccess({ categories: response.value as Category[] });
                        }
                        this.log.error('Failed to load categories.', response?.errors);
                        return CategoryActions.loadAllCategoriesFailure({ error: response?.errors || ['Empty or invalid response'] });
                    }),
                    catchError(error => {
                        this.log.error('Error loading categories.', error);
                        return of(CategoryActions.loadAllCategoriesFailure({ error: [error.message || 'Unknown error'] }));
                    })
                )
            )
        )
    );
    loadCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.loadCategory),
            mergeMap(action =>
                this.category.getCategoryById(action.id).pipe(
                    map(response => {
                        if (response && response.isSuccess && response.hasValue) {
                            this.log.info('Category fetched successfully.', response.value);
                            return CategoryActions.loadCategorySuccess({ category: response.value as Category });
                        }
                        this.log.error('Failed to fetch category.', response?.errors);
                        return CategoryActions.loadCategoryFailure({ error: response?.errors || ['Empty or invalid response'] });
                    }),
                    catchError(error => {
                        this.log.error('Error fetching category.', error);
                        return of(CategoryActions.loadCategoryFailure({ error: [error.message || 'Unknown error'] }));
                    })
                )
            )
        )
    );
}