import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassActiveRoutingModule } from './class-active-routing.module';
import { ClassActiveComponent } from './class-active.component';


@NgModule({
  declarations: [
    ClassActiveComponent
  ],
  imports: [
    CommonModule,
    ClassActiveRoutingModule
  ]
})
export class ClassActiveModule { }
