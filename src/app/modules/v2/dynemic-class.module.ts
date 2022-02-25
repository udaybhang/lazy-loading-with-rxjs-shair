import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynemicClassRoutingModule } from './dynemic-class-routing.module';
import { DynemicClassComponent } from './dynemic-class.component';


@NgModule({
  declarations: [
    DynemicClassComponent
  ],
  imports: [
    CommonModule,
    DynemicClassRoutingModule
  ]
})
export class DynemicClassModule { }
