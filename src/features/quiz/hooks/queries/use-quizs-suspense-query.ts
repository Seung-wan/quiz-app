import { useSuspenseQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants/query-keys';

import { quizApis } from '../../apis/quiz-apis';

import type { Quiz } from '../../types';

export interface QuizFilters {
  amount: number;
  category?: number;
  difficulty?: Quiz['difficulty'];
  type?: Quiz['type'];
  encode?: 'url3986' | 'base64';
}

export function useQuizsSuspenseQuery(filters: QuizFilters) {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.QUIZS.LIST(filters),
    queryFn: () => quizApis.getQuizs(filters),
  });
}
