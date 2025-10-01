import { createReducer, on } from '@ngrx/store';
import { Category } from '../../features/todo/model/category.model';
import { CategoryActions } from '../actions/category.actions';
import { CategoryState } from '../states/category.state';

function upsertCategory(list: Category[], incoming: Category): Category[] {
    const idx = list.findIndex(c => String(c.id) === String(incoming.id));
    if (idx === -1) return [...list, incoming];
    const clone = [...list];
    clone[idx] = incoming;
    return clone;
}

function mergeById(existing: Category[], incoming: Category[]): Category[] {
    const map = new Map<string, Category>(existing.map(c => [String(c.id), c]));
    for (const c of incoming) {
        map.set(String(c.id), c);
    }
    return Array.from(map.values());
}

const initialCategoryState: CategoryState = {
  categories: [],
  status: 'empty',
  error: null
};

export const categoryFeature = createReducer(
  initialCategoryState,
    on(CategoryActions.loadCategory, (state) => ({
        ...state,
        status: 'loading' as const,
        error: null
    })),
    on(CategoryActions.loadCategorySuccess, (state, { category }) => ({
        ...state,
        categories: upsertCategory(state.categories, category),
        status: 'loaded' as const,
        error: null
    })),
    on(CategoryActions.loadCategoryFailure, (state, { error }) => ({
        ...state,
        status: 'error' as const,
        error
    })),
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
    on(CategoryActions.getCategoriesFromTasksSuccess, (state, {categories}) => {
        const merged = mergeById(state.categories, (categories || []).filter(Boolean) as Category[]);
        return {
            ...state,
            categories: merged,
            status: merged.length ? 'loaded' as const : 'empty' as const,
            error: null
        };
    }),
    on(CategoryActions.getCategoriesFromTasksFailure, (state, { error }) => ({
        ...state,
        status: 'error' as const,
        error
    })),
    on(CategoryActions.loadAllCategories, (state) => ({
        ...state,
        status: 'loading' as const,
        error: null
    })),
    on(CategoryActions.loadAllCategoriesSuccess, (state, { categories }) => ({
        ...state,
        categories: mergeById(state.categories, categories),
        status: categories.length ? 'loaded' as const : 'empty' as const,
        error: null
    })),
    on(CategoryActions.loadAllCategoriesFailure, (state, { error }) => ({
        ...state,
        status: 'error' as const,
        error
    })),
);