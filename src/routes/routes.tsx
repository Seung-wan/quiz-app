import { Suspense } from 'react';

import { Spinner } from '@/components';
import { ROUTE_PATHS } from '@/constants/routes';

import { Home } from '@/features/home/pages';
import { Quiz, QuizResult } from '@/features/quiz/pages';

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
    element: <QuizResult />,
  },
];
