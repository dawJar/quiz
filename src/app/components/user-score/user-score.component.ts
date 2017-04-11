import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-score',
  templateUrl: './user-score.component.html',
  styleUrls: ['./user-score.component.css']
})
export class UserScoreComponent {

    @Input() score: number;

    constructor() { }

}
