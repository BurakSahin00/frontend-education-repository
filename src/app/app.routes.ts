import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './services/user.service';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoDashboardComponent } from './components/todo-dashboard/todo-dashboard.component';
import { Layout } from './components/layout/layout';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: 'login' },
    { 
        path: 'login', 
        component: LoginComponent, 
        title: 'Giriş' },
    {
        path: '',
        component: Layout,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'todos',
                component: TodosComponent,
                title: 'Görevler',
                children: [
                    {
                        path: ':id',
                        loadComponent: () => import('./components/todo-details/todo-details.component').then(m => m.TodoDetailsComponent),
                        title: 'Görev Detayı'
                    },
                    {
                        path: 'new',
                        loadComponent: () => import('./components/todo-details/todo-details.component').then(m => m.TodoDetailsComponent),
                        title: 'Yeni Görev'
                    },
                    {
                        path: 'calendar',
                        loadComponent: () => import('./components/todo-calendar/todo-calendar.component').then(m => m.TodoCalendarComponent),
                        title: 'Takvim Görünümü'
                    }
                ],
            },
            {
                path: 'profile',
                loadComponent: () => import('./components/profile/profile.component').then(m => m.ProfileComponent),
                title: 'Profil',
                children: [
                    {
                        path: 'settings',
                        loadComponent: () => import('./components/settings/settings.component').then(m => m.SettingsComponent),
                        title: 'Ayarlar'
                    },
                ]
            },
            {
                path: 'dashboard',
                component: TodoDashboardComponent,
                title: 'Görev Panosu'
            }
        ]
    },
    {
        path: '**',
        loadComponent: () => import('./components/not-found/not-found.component').then(m => m.NotFoundComponent),
        title: 'Sayfa Bulunamadı'
    }
];
