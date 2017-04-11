import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss']
})
export class QuizCardComponent {

    @Input() quizComplete;
    @Input() score;
    @Output() clickQuizCard: EventEmitter<string> = new EventEmitter();

    constructor() { }

    handleClickQuizCard(clickedBtn: string) {
        this.clickQuizCard.emit(clickedBtn);
    }

}
