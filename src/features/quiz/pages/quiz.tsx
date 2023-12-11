import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { WithQueryAsyncBoundary, Spinner } from '@/components';
import { ROUTE_PATHS } from '@/constants/routes';
import { shuffle } from '@/utils/array';

import { AnswerList, QuizDescription } from '../components';
import { useQuiz, useQuizsSuspenseQuery } from '../hooks';
import type { QuizFilters } from '../hooks';

const DEFAULT_QUIZ_FILTERS: QuizFilters = {
  amount: 5,
  category: 18,
  difficulty: 'easy',
  type: 'multiple',
} as const;

function Quiz() {
  const navigate = useNavigate();

  const { currentStep, currentAnswer, selectAnswer, goNext } = useQuiz();
  const { data } = useQuizsSuspenseQuery(DEFAULT_QUIZ_FILTERS);
  const { category, question, correct_answer, difficulty, incorrect_answers } =
    data.results[currentStep];

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

  const handleClickNext = () => {
    if (currentStep === DEFAULT_QUIZ_FILTERS.amount - 1) {
      navigate(ROUTE_PATHS.QUIZ_RESULT);
      return;
    }

    goNext();
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-3xl">퀴즈 풀기</h1>
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
      {currentAnswer && (
        <button
          className="bg-black p-2 text-white"
          onClick={handleClickNext}
          type="button"
        >
          다음 문항
        </button>
      )}
    </div>
  );
}

const QuizPage = WithQueryAsyncBoundary(Quiz, {
  pendingFallback: <Spinner />,
  rejectedFallback: <div>퀴즈 페이지에서 에러가 발생했습니다.</div>,
});

export default QuizPage;
