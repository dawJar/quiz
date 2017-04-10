import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() currentQuestion;
  @Output() nextQuestion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
      console.log(this.currentQuestion);
  }

  handleNextQuestion(chosenAnswer: string) {
     this.nextQuestion.emit(chosenAnswer);
  }
}
