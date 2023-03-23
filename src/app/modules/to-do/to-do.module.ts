import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoRoutingModule } from './to-do-routing.module';
import { ToDoComponent } from './to-do.component';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from 'src/app/sharedModule/pagination/pagination.component';
import { PaginationModule } from 'src/app/sharedModule/pagination.module';


@NgModule({
  declarations: [
    ToDoComponent
  ],
  imports: [
    CommonModule,
    ToDoRoutingModule,
     MatCardModule,
     FormsModule,
     PaginationModule
  ]
})
export class ToDoModule { }
