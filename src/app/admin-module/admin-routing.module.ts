import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { AdminModuleComponent } from './admin-module.component';
import { AuthGuard } from './auth/authGuards/auth-guard.guard';
import { UserListComponent } from './navigation/user-list/user-list.component';
import { DirectionListComponent } from './navigation/direction-list/direction-list.component';
import { CrawlerListComponent } from './navigation/crawler-list/crawler-list.component';
import { StopWordsListComponent } from './navigation/stop-words-list/stop-words-list.component';
import { TechListComponent } from './navigation/tech-list/tech-list.component';



const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'admin', component: AdminModuleComponent, canActivate: [AuthGuard], children: [
            { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] },
            { path: 'direction-list', component: DirectionListComponent, canActivate: [AuthGuard] },
            { path: 'crawler-list', component: CrawlerListComponent, canActivate: [AuthGuard] },
            { path: 'technology-list', component: TechListComponent, canActivate: [AuthGuard] },
            { path: 'stop-words-list', component: StopWordsListComponent, canActivate: [AuthGuard] },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
