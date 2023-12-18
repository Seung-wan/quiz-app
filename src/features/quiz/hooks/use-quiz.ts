import { useCallback, useRef, useState } from 'react';

import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';
import { LocalStorage } from '@/utils';

import type { Quiz, QuizResult } from '@/features/quiz/types';

export function useQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answerCount, setAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);

  const quizStartDate = useRef(new Date());

  const selectAnswer = useCallback((answer: string) => {
    setCurrentAnswer(answer);
  }, []);

  const plusAnswerCount = useCallback(() => {
    setAnswerCount(prev => prev + 1);
  }, []);

  const plusWrongAnswerCount = useCallback(() => {
    setWrongAnswerCount(prev => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentStep(prev => prev - 1);
    setCurrentAnswer('');
  }, []);

  const goNext = useCallback(() => {
    setCurrentStep(prev => prev + 1);
    setCurrentAnswer('');
  }, []);

  const setQuizIncorrectQuestionToLocalStorage = useCallback((quiz: Quiz) => {
    const incorrectQuestions =
      (LocalStorage.getItem(
        LOCAL_STORAGE_KEYS.QUIZ_INCORRECT_QUESTIONS,
      ) as Quiz[]) ?? [];

    LocalStorage.setItem(LOCAL_STORAGE_KEYS.QUIZ_INCORRECT_QUESTIONS, [
      ...incorrectQuestions,
      quiz,
    ]);
  }, []);

  const setQuizResultToLocalStorage = useCallback((quizResult: QuizResult) => {
    LocalStorage.setItem(LOCAL_STORAGE_KEYS.QUIZ_RESULT, quizResult);
  }, []);

  const removeQuizIncorrectQuestionFromLocalStorage = useCallback(() => {
    LocalStorage.removeItem(LOCAL_STORAGE_KEYS.QUIZ_INCORRECT_QUESTIONS);
  }, []);

  return {
    quizStartDate,
    currentStep,
    currentAnswer,
    answerCount,
    wrongAnswerCount,
    selectAnswer,
    plusAnswerCount,
    plusWrongAnswerCount,
    goPrev,
    goNext,
    setQuizIncorrectQuestionToLocalStorage,
    setQuizResultToLocalStorage,
    removeQuizIncorrectQuestionFromLocalStorage,
  };
}
