import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/routes';
import { Beforeunload } from '@/components';
import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';
import { shuffle } from '@/utils/array';
import { LocalStorage } from '@/utils/local-storage';

import { AnswerList, QuizDescription } from '@/features/quiz/components';
import { useQuiz } from '@/features/quiz/hooks';

export default function QuizIncorrectAnswerNote() {
  const { currentStep, currentAnswer, selectAnswer, goPrev, goNext } =
    useQuiz();
  const data = LocalStorage.getItem(
    LOCAL_STORAGE_KEYS.QUIZ_INCORRECT_QUESTIONS,
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
    if (answer === correct_answer) {
    } else {
    }

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
        <h1 className="text-center text-3xl">오답 노트</h1>
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
        <div>{answerMessage}</div>
        <div className="flex gap-2">
          <button
            className="flex-1 bg-black p-2 text-white disabled:bg-gray-300"
            onClick={handleClickPrev}
            type="button"
            disabled={currentStep === 0}
          >
            이전
          </button>
          <button
            className="flex-1 bg-black p-2 text-white disabled:bg-gray-300"
            onClick={handleClickNext}
            type="button"
            disabled={currentStep === data.length - 1}
          >
            다음
          </button>
        </div>
        <div className="mt-4 text-center underline">
          <Link to={ROUTE_PATHS.QUIZ_RESULT}>결과페이지로</Link>
        </div>
      </div>
    </Beforeunload>
  );
}
