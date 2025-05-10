import { Routes } from '@angular/router'
import { PageViewComponent } from './features/pages/components/page-view/page-view.component'

export const routes: Routes = [
  { path: 'page/:id', component: PageViewComponent },
]
