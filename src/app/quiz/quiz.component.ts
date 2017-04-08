import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questions: FirebaseListObservable<any>[];
  doesQuizStarted = false;
  randomQuestions = [];
  currentQuestionToRender = 0;
  questionsLen: number;

  constructor(private fs: FirebaseService) { }

  ngOnInit() {
    this.fs.fetchQuestions().subscribe(data => this.questions = data);
  }

  setQuizQuestions() {
    this.questionsLen = this.questions.length;
    let questionCount = 0;
    const questionsSet = new Set();

    while (questionCount < 5) {
      questionsSet.add(this.questions[Math.floor(Math.random() * this.questionsLen)]);
      if (questionsSet.size > questionCount) {
        questionCount++;
      }
    }

    return Array.from(questionsSet);
  }

  startQuiz() {
    this.randomQuestions = this.setQuizQuestions();
    this.doesQuizStarted = true;
  }

  handleNextQuestion() {
    console.log('next');
    this.currentQuestionToRender = this.currentQuestionToRender;
    console.log(this.currentQuestionToRender);
    if (this.currentQuestionToRender > this.questionsLen) {
      this.doesQuizStarted = false;
    }
  }
}
