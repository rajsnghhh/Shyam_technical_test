import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule, MatCardModule, NgxPaginationModule
  ]
})
export class ToDoModule { }
