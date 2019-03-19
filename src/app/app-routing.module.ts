import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';


const routes: Routes = [
    { path: 'admin', redirectTo: 'admin' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
