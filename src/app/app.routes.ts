import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { TodoAppComponent } from './components/todo-app/todo-app.component';
import { UserTaskCardsComponent } from './components/user-task-cards/user-task-cards.component';
import { UserService } from './services/user.service';
import { MainComponent } from './components/main/main.component';
import { Layout } from './components/layout/layout';

// Basit auth guard (örnek)
const authGuard = () => !!inject(UserService).getUsers().length;


export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent, title: 'Giriş' },
    {
        path: '',
        component: Layout,
        canActivate: [authGuard],
        children: [
            { path: 'todos', component: MainComponent, title: 'Görevler' },
            {
                path: 'search',
                loadComponent: () => import('./components/search/search.component').then(m => m.SearchComponent),
                title: route => route.queryParamMap.get('q') ? `Ara: ${route.queryParamMap.get('q')}` : 'Arama'
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent),
        title: 'Sayfa Bulunamadı'
    }
];
