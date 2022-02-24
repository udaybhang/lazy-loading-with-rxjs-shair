import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassActiveComponent } from './class-active.component';

const routes: Routes = [{ path: '', component: ClassActiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassActiveRoutingModule { }
