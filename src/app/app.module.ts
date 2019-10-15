import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';


import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';

import { ChecklistComponent } from './checklist/checklist.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './checklist/add/add.component';
import { ChkComponent } from './checklist/chk/chk.component';

@NgModule({
  declarations: [
    AppComponent,
  
   
    SigninComponent,
    ChecklistComponent,
    HeaderComponent,
    AddComponent,
    ChkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
