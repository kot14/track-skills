import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { HttpModule } from '@angular/http';
import { TechListServiceService } from './services/tech-list-service.service';

import { AuthService } from './auth/authServices/auth.service';
import { AdminModuleComponent } from './admin-module.component';
import { AuthGuard } from './auth/authGuards/auth-guard.guard';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './navigation/special-component/sidebar/sidebar.component';
import { UserListComponent } from './navigation/user-list/user-list.component';
import { DirectionListComponent } from './navigation/direction-list/direction-list.component';
import { CrawlerListComponent } from './navigation/crawler-list/crawler-list.component';
import { StopWordsListComponent } from './navigation/stop-words-list/stop-words-list.component';
import { AppComponent } from '../app.component';
import { environment } from 'src/environments/environment';
import { ModalWindowComponent } from './navigation/user-list/modal-window/modal-window.component';
import { ModalService } from './navigation/user-list/service/modal.service';
import { PaginationService } from './navigation/user-list/service/pagination.service';
import { UsersListService } from './navigation/user-list/service/users-list.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { DirectionViewModalComponent } from './navigation/direction-list/modal-windows/direction-view-modal/direction-view-modal.component';
import { DirectionEditModalComponent } from './navigation/direction-list/modal-windows/direction-edit-modal/direction-edit-modal.component';
import { DirectionAddModalComponent } from './navigation/direction-list/modal-windows/direction-add-modal/direction-add-modal.component';
import { DirectionService } from './navigation/direction-list/services/direction.service';
import { TechListComponent } from './navigation/tech-list/tech-list.component';
import { SearchService } from './navigation/tech-list/search.service';
import { EditModalComponent } from './navigation/tech-list/modal-windows/edit-modal/edit-modal.component';
import { AddModalComponent } from './navigation/tech-list/modal-windows/add-modal/add-modal.component';
import { ViewModalComponent } from './navigation/tech-list/modal-windows/view-modal/view-modal.component';


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AngularFireModule.initializeApp(environment.firebase),
        BrowserModule,
        AngularFireDatabaseModule, // for database\
        AngularFireAuthModule
    ],
    declarations: [
        LoginComponent,
        AdminModuleComponent,
        TechListComponent,
        SearchService,
        ModalComponent,
        DirectionListComponent,
        AddModalComponent,
        EditModalComponent,
        ViewModalComponent,
        DirectionViewModalComponent,
        DirectionEditModalComponent,
        DirectionAddModalComponent,
        UserListComponent,
        ModalWindowComponent,
        CrawlerListComponent,
        DirectionListComponent,
        SidebarComponent,
        StopWordsListComponent,
        NavigationComponent,
        SidebarComponent,
        UserListComponent,
        DirectionListComponent,
        CrawlerListComponent,
        StopWordsListComponent,
        TechListComponent
    ],
    providers: [
        AuthService,
        TechListServiceService,
        DirectionService,
        ModalService,
        PaginationService,
        UsersListService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})

export class AdminModule { }
