import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserRoutingModule } from './list-user-routing.module';
import { ListUserComponent } from './list-user.component';
import { Com1Component } from 'src/app/comman/components/com1.component';

@NgModule({
  imports: [
    CommonModule,
    ListUserRoutingModule
  ],
  declarations: [ListUserComponent, Com1Component]
})
export class ListUserModule { }