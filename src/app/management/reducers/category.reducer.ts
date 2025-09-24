import { createReducer, on } from '@ngrx/store';
import { Category } from '../../features/todo/model/category.model';
import { CategoryActions } from '../actions/category.actions';
import { CategoryState } from '../states/category.state';

const initialCategoryState: CategoryState = {
  categories: [],
  status: 'empty',
  error: null
};

export const categoryFeature = createReducer(
  initialCategoryState,
    on(CategoryActions.createCategory, (state) => ({
        ...state,
        status: 'loading' as const,
        error: null
    })),
    on(CategoryActions.createCategorySuccess, (state, { category }) => ({
        ...state,
        categories: [...state.categories, category],
        status: 'loaded' as const,
        error: null
    })),
    on(CategoryActions.createCategoryFailure, (state, { error }) => ({
        ...state,
        status: 'error' as const,
        error
    })),
    on(CategoryActions.updateCategory, (state) => ({
        ...state,
        status: 'loading' as const,
        error: null
    })),
    on(CategoryActions.updateCategorySuccess, (state, { category }) => ({
        ...state,
        categories: state.categories.map(c => c.id === category.id ? category : c),
        status: 'loaded' as const,
        error: null
    })),
    on(CategoryActions.updateCategoryFailure, (state, { error }) => ({
        ...state,
        status: 'error' as const,
        error
    })),
    on(CategoryActions.deleteCategory, (state) => ({
        ...state,
        status: 'loading' as const,
        error: null
    })),
    on(CategoryActions.deleteCategorySuccess, (state, { id }) => ({
        ...state,
        categories: state.categories.filter(c => c.id !== id),
        status: state.categories.length > 1 ? 'loaded' as const : 'empty' as const,
        error: null
    })),
    on(CategoryActions.deleteCategoryFailure, (state, { error }) => ({
        ...state,
        status: 'error' as const,
        error
    })),
    on(CategoryActions.getCategoriesFromTasks, (state) => ({
        ...state,
        status: 'loading' as const,
        error: null
    })),
    on(CategoryActions.getCategoriesFromTasksSuccess, (state, {categories}) => ({
        ...state
        , categories: categories.filter(Boolean) as Category[],
        status: categories.length ? 'loaded' as const : 'empty' as const,
        error: null
    })),
    on(CategoryActions.getCategoriesFromTasksFailure, (state, { error }) => ({
        ...state,
        status: 'error' as const,
        error
    })),
);