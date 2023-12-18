import { useMemo } from 'react';

import { Beforeunload, Title } from '@/components';
import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';
import { shuffle, LocalStorage } from '@/utils';

import {
  AnswerList,
  AnswerMessage,
  QuizDescription,
  BottomButtons,
  BottomLink,
} from '@/features/quiz/components';
import { useQuiz } from '@/features/quiz/hooks';
import type { Quiz } from '@/features/quiz/types';

export default function QuizIncorrectAnswerNote() {
  const { currentStep, currentAnswer, selectAnswer, goPrev, goNext } =
    useQuiz();
  const data = useMemo(
    () =>
      LocalStorage.getItem(
        LOCAL_STORAGE_KEYS.QUIZ_INCORRECT_QUESTIONS,
      ) as Quiz[],
    [],
  );
  const { category, question, correct_answer, difficulty, incorrect_answers } =
    data[currentStep];

  const answers = useMemo(
    () => shuffle([correct_answer, ...incorrect_answers]),
    [correct_answer, incorrect_answers],
  );

  const answerMessage = useMemo(() => {
    if (currentAnswer === '') {
      return;
    }

    return currentAnswer === correct_answer ? '정답입니다!' : '오답입니다!';
  }, [correct_answer, currentAnswer]);

  const handleClickAnswer = (answer: string) => {
    selectAnswer(answer);
  };

  const handleClickPrev = () => {
    goPrev();
  };

  const handleClickNext = () => {
    goNext();
  };

  return (
    <Beforeunload>
      <div className="flex flex-col gap-2">
        <Title>오답 노트</Title>
        <QuizDescription
          category={category}
          questionNo={currentStep + 1}
          question={question}
          difficulty={difficulty}
        />
        <AnswerList
          answers={answers}
          currentAnswer={currentAnswer}
          correctAnswer={correct_answer}
          onClickAnswer={handleClickAnswer}
        />
        <AnswerMessage>{answerMessage}</AnswerMessage>
        <BottomButtons
          prevDisabled={currentStep === 0}
          nextDisabled={currentStep === data.length - 1}
          onClickPrev={handleClickPrev}
          onClickNext={handleClickNext}
        />
        <BottomLink />
      </div>
    </Beforeunload>
  );
}
