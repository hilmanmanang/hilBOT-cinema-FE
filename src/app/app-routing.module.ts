import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './user/main-page/main-page.component';
import { MovieComponent } from './user/movie/movie.component';
import { MyTicketComponent } from './user/my-ticket/my-ticket.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: MovieComponent
      },
      {
        path: 'my-tiket',
        component: MyTicketComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
