import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynemicClassComponent } from './dynemic-class.component';

const routes: Routes = [{ path: '', component: DynemicClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynemicClassRoutingModule { }
