export interface QuizState {
    questions: Question[];
    quizQuestions: Question[];
    quizStarted: boolean;
    currentQuizQuestion: number;
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

