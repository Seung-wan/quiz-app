import { useCallback, useState } from 'react';

export function useQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answerCount, setAnswerCount] = useState(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState(0);

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

  return {
    currentStep,
    currentAnswer,
    answerCount,
    wrongAnswerCount,
    selectAnswer,
    plusAnswerCount,
    plusWrongAnswerCount,
    goPrev,
    goNext,
  };
}
