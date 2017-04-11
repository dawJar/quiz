import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() score;
  @Input() currentQuestion;
  @Input() numberOfQuestion;
  @Input() currentCorrectAnswer;
  @Input() quizQuestionQuantity;
  @Output() nextQuestion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  handleNextQuestion(chosenAnswer: string) {
      this.nextQuestion.emit(chosenAnswer);
  }
}
