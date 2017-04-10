import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent {

    @Input() quizComplete;
    @Input() userScore;
    @Output() clickQuizCard: EventEmitter<string> = new EventEmitter();

    constructor() { }

    handleClickQuizCard(clickedBtn: string) {
        this.clickQuizCard.emit(clickedBtn);
    }

}
