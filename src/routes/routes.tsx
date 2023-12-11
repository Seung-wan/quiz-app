import { ROUTE_PATHS } from '@/constants/routes';

import Home from '@/features/home/pages/Home';
import Quiz from '@/features/quiz/pages/quiz';

export const routes = [
  {
    path: ROUTE_PATHS.HOME,
    element: <Home />,
  },
  {
    path: ROUTE_PATHS.QUIZ,
    element: <Quiz />,
  },
];
