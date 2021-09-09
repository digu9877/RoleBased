import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AllUserManagementComponent } from './all-user-management/all-user-management.component';
import { BlockUiTemplateComponent } from './sharedModule/block-ui-template/block-ui-template.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserManagementComponent,
    AllUserManagementComponent,
    BlockUiTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BlockUIModule.forRoot({
      template: BlockUiTemplateComponent
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
