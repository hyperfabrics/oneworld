
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';


import { DataService } from './data.service';

import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


import { DataStorageService } from './shared/data-storage.service';
import { NotificationService } from './shared/notification.service'
import { SignupComponent } from './shared/auth/signup/signup.component';
import { SigninComponent } from './shared/auth/signin/signin.component';
import { AppSplash } from './shared/auth/splash/splash.component';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';

import { Configuration } from './configuration';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLayoutComponent,


		SignupComponent,
		SigninComponent,
		AppSplash,
  ],
  imports: [
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    DataStorageService,
		Configuration,
    DataService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
