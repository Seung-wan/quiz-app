import { Suspense, lazy } from 'react';

import { ROUTE_PATHS } from '@/constants/routes';
import { Spinner } from '@/components';

import { Home } from '@/features/home/pages';

const Quiz = lazy(() => import('@/features/quiz/pages/quiz'));
const QuizResult = lazy(() => import('@/features/quiz/pages/quiz-result'));
const QuizIncorrectAnswerNote = lazy(
  () => import('@/features/quiz/pages/quiz-inccorect-answer-note'),
);

export const routes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />,
  },
  {
    path: ROUTE_PATHS.QUIZ,
    element: (
      <Suspense fallback={<Spinner />}>
        <Quiz />
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATHS.QUIZ_RESULT,
    element: (
      <Suspense fallback={<Spinner />}>
        <QuizResult />
      </Suspense>
    ),
  },
  {
    path: ROUTE_PATHS.QUIZ_INCORRECT_ANSWER_NOTE,
    element: (
      <Suspense fallback={<Spinner />}>
        <QuizIncorrectAnswerNote />
      </Suspense>
    ),
  },
];
