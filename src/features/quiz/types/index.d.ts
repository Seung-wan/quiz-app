export interface Quiz {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: [string, string, string];
  question: string;
  type: string;
}

export interface QuizResult {
  playTime: number;
  answerCount: number;
  wrongAnswerCount: number;
}
