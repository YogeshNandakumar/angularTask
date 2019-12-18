import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGaurdGuard } from './route-gaurd.guard';
import { CategoryListComponent } from './category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '', redirectTo: 'category', pathMatch: 'full'},
  {path: 'category', component: CategoryListComponent},
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/notifications', component: NotificationsComponent, canActivate:[RouteGaurdGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', redirectTo: 'category', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
