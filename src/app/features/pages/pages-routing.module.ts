import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageViewComponent } from './components/page-view/page-view.component';
import { PageEditComponent } from './components/page-edit/page-edit.component';

const routes: Routes = [
  { path: '', component: PageViewComponent },
  { path: 'edit/:id', component: PageEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
