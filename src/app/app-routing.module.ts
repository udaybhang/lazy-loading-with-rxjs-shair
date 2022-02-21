import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "add-user", loadChildren: () => import('./modules/user/user.module').then(result => result.UserModule) },
  { path: "list-user", loadChildren: () => import('./modules/list/list-user.module').then(result => result.ListUserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
