import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { CategoryService } from "../../features/todo/service/category.service";
import { CategoryActions } from "../actions/category.actions";
import { Category } from "../../features/todo/model/category.model";
import { LoggingService } from "../../services/logging.service";


@Injectable()
export class CategoryEffect {
    
    private actions$ = inject(Actions)
    private category = inject(CategoryService)
    private log = inject(LoggingService)

    addCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.createCategory),
            mergeMap(action =>
                this.category.addCategory(action.request).pipe(
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            this.log.info('Category created successfully.', response.value);
                            return CategoryActions.createCategorySuccess({ category: response.value as Category});
                        }
                        this.log.error('Failed to create category.', response.errors);
                        return CategoryActions.createCategoryFailure({ error: response.errors || ['Unknown error'] });
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
                    map(response => {
                        if (response.isSuccess && response.hasValue) {
                            this.log.info('Category updated successfully.', response.value);
                            return CategoryActions.updateCategorySuccess({ category: response.value as Category });
                        }
                        this.log.error('Failed to update category.', response.errors);
                        return CategoryActions.updateCategoryFailure({ error: response.errors || ['Unknown error'] });
                    }),
                    catchError(error => {
                        this.log.error('Error updating category.', error);
                        return of(CategoryActions.updateCategoryFailure({ error: [error.message || 'Unknown error'] }))
                    })
                )
            )
        )
    );

    deleteCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CategoryActions.deleteCategory),
            mergeMap(action =>
                this.category.deleteCategory(action.request).pipe(
                    map(response => {
                        if (response.isSuccess) {
                            this.log.info('Category deleted successfully.', action.request.id);
                            return CategoryActions.deleteCategorySuccess({ id: action.request.id });
                        }
                        this.log.error('Failed to delete category.', response.errors);
                        return CategoryActions.deleteCategoryFailure({ error: response.errors || ['Unknown error'] });
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
                        if (response.isSuccess && response.hasValue) {
                            this.log.info('Fetched categories by task successfully.', action.request.taskId);
                            return CategoryActions.getCategoriesByTaskSuccess();
                        }
                        this.log.error('Failed to fetch categories by task.', response.errors);
                        return CategoryActions.getCategoriesByTaskFailure({ error: response.errors || ['Unknown error'] });
                    }),
                    catchError(error => {
                        this.log.error('Error fetching categories by task.', error);
                        return of(CategoryActions.getCategoriesByTaskFailure({ error: [error.message || 'Unknown error'] }))
                    })
                )
            )
        )
    );
}