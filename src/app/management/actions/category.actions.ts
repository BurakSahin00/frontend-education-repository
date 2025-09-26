import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Category } from "../../features/todo/model/category.model";
import { CreateCategoryRequest } from "../../features/todo/model/category.model";
import { UpdateCategoryRequest } from "../../features/todo/model/category.model";
import { DeleteCategoryRequest } from "../../features/todo/model/category.model";
import { GetCategoriesByTaskRequest } from "../../features/todo/model/category.model";


export const CategoryActions = createActionGroup({
    source: 'Category',
    events: {
        'Load Category': props<{ id: string }>(),
        'Load Category Success': props<{ category: Category }>(),
        'Load Category Failure': props<{ error: string[] }>(),

        'Create Category': props<{ request: CreateCategoryRequest }>(),
        'Create Category Success': props<{ category: Category }>(),
        'Create Category Failure': props<{ error: string[] }>(),

        'Update Category': props<{ request: UpdateCategoryRequest }>(),
        'Update Category Success': props<{ category: Category }>(),
        'Update Category Failure': props<{ error: string[] }>(),

        'Delete Category': props<{ request: DeleteCategoryRequest }>(),
        'Delete Category Success': props<{ id: string }>(),
        'Delete Category Failure': props<{ error: string[] }>(),

        'Get Categories From Tasks': emptyProps(),
        'Get Categories From Tasks Success': props<{ categories: Category[] }>(),
        'Get Categories From Tasks Failure': props<{ error: string[] }>(),

        'Get Categories By Task': props<{ request: GetCategoriesByTaskRequest }>(),
        'Get Categories By Task Success': emptyProps(),
        'Get Categories By Task Failure': props<{ error: string[] }>(),



    }
});