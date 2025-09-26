import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CategoryState } from '../states/category.state';

export const selectCategoryState = createFeatureSelector<CategoryState>('categories');

export const selectAllCategories = createSelector(
  selectCategoryState,
  (state: CategoryState) => state.categories
);

export const selectCategoryById = (id: string) => createSelector(
  selectAllCategories,
  (categories) => categories.find(category => String(category.id) === String(id))
);