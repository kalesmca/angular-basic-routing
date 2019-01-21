import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudent } from '../app/createPage/create.component';
import { ShowAll } from '../app/listPage/list.component';
import { from } from 'rxjs';

const routes: Routes = [{ path: 'create', component: CreateStudent },
{ path: 'show-all', component: ShowAll }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [CreateStudent, ShowAll]
})
export class AppRoutingModule { }
