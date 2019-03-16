import {Routes, RouterModule} from '@angular/router';
import { PromblemListComponent } from './components/promblem-list/promblem-list.component';
import { ProblemDetailComponent } from './components/problem-detail/problem-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'problems',
    pathMatch: 'full'
  },
  {
    path: 'problems',
    component: PromblemListComponent
  },
  {
    path: 'problems/:id',
    component: ProblemDetailComponent
  },
  {
    path: '**',
    redirectTo: 'problems'
  }
];

export const routing = RouterModule.forRoot(routes);
