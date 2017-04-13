import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-holder',
  templateUrl: './question-holder.component.html',
  styleUrls: ['./question-holder.component.scss']
})
export class QuestionHolderComponent {

    @Input() numberOfQuestion;
    @Input() quizQuestionQuantity;
    @Input() question;

    constructor() { }

}
