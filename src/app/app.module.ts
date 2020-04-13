import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MainPageComponent } from './user/main-page/main-page.component';
import { MyTicketComponent } from './user/my-ticket/my-ticket.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './user/movie/movie.component';
import { MainPageManagementComponent } from './admin/main-page-management/main-page-management.component';
import { ListMovieManagementComponent } from './admin/movie-management/list-movie-management/list-movie-management.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MyTicketComponent,
    LoginComponent,
    MovieComponent,
    MainPageManagementComponent,
    ListMovieManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
