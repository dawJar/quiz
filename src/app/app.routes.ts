import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './containers/quiz/quiz.component';
import { ResultsComponent } from './components/results/results.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
];

export const routing = RouterModule.forRoot(APP_ROUTES);