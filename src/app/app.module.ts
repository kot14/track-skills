import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AdminModule } from './admin-module/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { ModalService } from './admin-module/modal/modal.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DirectionService } from './admin-module/navigation/direction-list/services/direction.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ModalService,
              DirectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
