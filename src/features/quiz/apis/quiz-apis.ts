import { httpClient } from '@/apis/http-client';

import type { QuizFilters } from '../hooks';
import type { Quiz } from '../types';

type GetQuizsRequest = QuizFilters;

interface GetQuizsResponse {
  response_code: number;
  results: Quiz[];
}

export const quizApis = {
  async getQuizs(params: GetQuizsRequest) {
    const { data } = await httpClient.get<GetQuizsResponse>('/api.php', {
      params,
    });

    return data;
  },
};
