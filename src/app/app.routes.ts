import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { Layout } from './components/layout/layout';
import { AuthGuard } from './guards/auth.guard';
import { TodosResolver } from './resolvers/todos.resolver';
import { TodoDetailResolver as TodoResolver } from './resolvers/todo.resolver';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        title: 'Giriş'
    },
    {
        path: 'app',
        component: Layout,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'todos',
                component: TodosComponent,
                title: 'Görevler',
                resolve: { todos: TodosResolver }
            },
            {
                path: 'todos/:id',
                loadComponent: () => import('./components/todo-details/todo-details.component').then(m => m.TodoDetailsComponent),
                title: 'Görev Detayı',
                resolve: { todo: TodoResolver }
            },
            {
                path: 'profile',
                loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent),
                title: 'Profil',
            },
            {
                path: 'dashboard',
                component: TodoDashboardComponent,
                title: 'Görev Panosu',
                resolve: { todos: TodosResolver }
            },
            {
                path: 'calendar',
                loadComponent: () => import('./components/calendar/calendar.component').then(m => m.CalendarComponent),
                title: 'Takvim Görünümü',
                resolve: { todos: TodosResolver }
            }
        ]
    },
    {
        path: '**',
        component: NotFound,
        title: 'Sayfa Bulunamadı'
    }
];
