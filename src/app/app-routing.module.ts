import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.gaurd';

const routes: Routes = [
  { path: "add-user", canActivate: [AuthGuard], loadChildren: () => import('./modules/user/user.module').then(result => result.UserModule) },
  { path: "list-user", canActivate: [AuthGuard], loadChildren: () => import('./modules/list/list-user.module').then(result => result.ListUserModule) },
  { path: "login",  loadChildren: () => import('./auth/login.module').then(result => result.LoginModule) },
  { path: 'logout', loadChildren: () => import('./auth/logout/logout.module').then(m => m.LogoutModule) },
  { path: 'v1', loadChildren: () => import('./modules/v1/class-active.module').then(m => m.ClassActiveModule) },
  { path: 'v2', loadChildren: () => import('./modules/v2/dynemic-class.module').then(m => m.DynemicClassModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
