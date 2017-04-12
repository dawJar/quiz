import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environments/firebase.config';
import { QuizComponent } from './containers/quiz/quiz.component';
import { HomeComponent } from './components/home/home.component';
import { ResultsComponent } from './containers/results/results.component';
import { routing } from './app.routes';
import { NavComponent } from './components/nav/nav.component';
import { FirebaseService } from './services/firebase.service';
import { QuestionComponent } from './components/question/question.component';
import { StoreModule } from '@ngrx/store';
import { combineReducers } from './reducers/index';
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { ProgressBarComponent } from './containers/progress-bar/progress-bar.component';
import { UserScoreComponent } from './components/user-score/user-score.component';
import { ResultDialogComponent } from './components/result-dialog/result-dialog.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    ResultsComponent,
    NavComponent,
    QuestionComponent,
    QuizCardComponent,
    ProgressBarComponent,
    UserScoreComponent,
    ResultDialogComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    StoreModule.provideStore(combineReducers)
  ],
  entryComponents: [ResultDialogComponent],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
