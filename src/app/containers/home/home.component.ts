import { Component, OnInit } from '@angular/core';
import { QuizState } from '../../state/app-state';
import { Store } from '@ngrx/store';
import { SET_TITLE } from '../../constants/app-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<QuizState>) { }

  ngOnInit() {
      this.store.dispatch({
          type: SET_TITLE,
          payload: 'home'
      });
  }

}
