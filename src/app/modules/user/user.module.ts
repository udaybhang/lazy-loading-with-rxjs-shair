import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user.component';
import { Com2Component } from 'src/app/comman/components/com2/com2.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [AddUserComponent, Com2Component]
})
export class UserModule { }