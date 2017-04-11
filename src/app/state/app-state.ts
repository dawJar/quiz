export interface QuizState {
    questions: Question[];
    quizQuestions: Question[];
    quizStarted: boolean;
    currentQuizQuestion: number;
    currentCorrectAnswer: string;
    quizComplete: boolean;
    userScore: number;
}

export interface Question {
    correctAnswer: string;
    questionId: number;
    question: string;
    answers: Answer[];
}

export interface Answer {
    answer: string;
    tick: string;
}

