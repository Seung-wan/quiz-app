import { useCallback, useState } from 'react';

export function useQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const selectAnswer = useCallback((answer: string) => {
    setCurrentAnswer(answer);
  }, []);

  const goNext = useCallback(() => {
    setCurrentStep(prev => prev + 1);
    setCurrentAnswer('');
  }, []);

  return {
    currentStep,
    currentAnswer,
    selectAnswer,
    goNext,
  };
}
