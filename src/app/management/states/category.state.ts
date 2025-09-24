import {Category} from '../../features/todo/model/category.model'

export interface CategoryState {

    categories: Category[];
    status: 'loading' | 'loaded' | 'error' | 'empty';
    error: string[] | null;

}