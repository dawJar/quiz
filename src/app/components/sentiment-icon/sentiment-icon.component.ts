import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sentiment-icon',
  templateUrl: './sentiment-icon.component.html',
  styleUrls: ['./sentiment-icon.component.css']
})
export class SentimentIconComponent {

    @Input() score;

    constructor() { }

}
