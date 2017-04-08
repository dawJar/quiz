import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './state/app-state';
import { INCREMENT } from './constants/app-constants';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    data: State;

    constructor(private _store: Store<State>) {
      _store.select('mainReducer')
            .subscribe((data: State) => {
                this.data = data;
            });
      console.log(this.data.counter);
    }

    increment() {
        this._store.dispatch({ type: INCREMENT });
    }

}
