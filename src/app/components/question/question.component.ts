import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() currentQuestion;
  @Output() nextQuestion = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  goToNextQuestion() {
    this.nextQuestion.emit();
  }
}
