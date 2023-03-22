import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'Posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },
  { path: 'To_Do', loadChildren: () => import('./modules/to-do/to-do.module').then(m => m.ToDoModule) },
  { path: 'pagination', loadChildren: () => import('./modules/pagination/pagination.module').then(m => m.PaginationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
