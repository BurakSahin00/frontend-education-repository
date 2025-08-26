import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { TodoAppComponent } from './components/todo-app/todo-app.component';
import { UserTaskCardsComponent } from './components/user-task-cards/user-task-cards.component';
import { UserService } from './services/user.service';
import { AppShellComponent } from './components/layout/app-shell.component';

// Basit auth guard (örnek)
const authGuard = () => !!inject(UserService).getUsers().length;

/*
 TODO APP ROUTER ÖZETİ
 - Statik Route: /login
 - Nested Routes: /todos altında CRUD ve hiyerarşi
 - Dinamik URL: :id, :subId parametreleri
 - Lazy Loaded Feature: /reports (ayrı feature)
 - Dinamik Başlıklar: Param & query param ile
 - Wildcard: 404 yönlendirmesi
*/

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: 'login', component: LoginComponent, title: 'Giriş' },
    {
        path: '',
        component: AppShellComponent,
        canActivate: [authGuard],
        children: [
            { path: 'todos', component: UserTaskCardsComponent, title: 'Görevler' },
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
