import type { QuizFilters } from '@/features/quiz/hooks/queries/use-quizs-suspense-query';

export const QUERY_KEYS = {
  QUIZS: {
    ALL: ['quizs'] as const,
    LISTS: () => [...QUERY_KEYS.QUIZS.ALL, 'list'] as const,
    LIST: (filters: QuizFilters) =>
      [...QUERY_KEYS.QUIZS.LISTS(), filters] as const,
  },
};
