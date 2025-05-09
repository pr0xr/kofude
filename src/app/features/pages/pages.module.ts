import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageViewComponent } from './components/page-view/page-view.component';
import { PageEditComponent } from './components/page-edit/page-edit.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  //declarations: [PageViewComponent, PageEditComponent],
  imports: [CommonModule, FormsModule, PagesRoutingModule],
})
export class PagesModule { }
