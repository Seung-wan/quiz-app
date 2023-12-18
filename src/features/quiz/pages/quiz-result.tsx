import Chart from 'react-apexcharts';
import type { Props as ChartData } from 'react-apexcharts';

import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';
import { Title } from '@/components';
import { LocalStorage } from '@/utils';

import { BottomLinks, Result } from '@/features/quiz/components';
import type { QuizResult } from '@/features/quiz/types';

const DEFAULT_QUIZ_RESULT = {
  playTime: 0,
  answerCount: 0,
  wrongAnswerCount: 0,
};

export default function QuizResult() {
  const quizResult =
    (LocalStorage.getItem(LOCAL_STORAGE_KEYS.QUIZ_RESULT) as QuizResult) ??
    DEFAULT_QUIZ_RESULT;
  const { playTime, answerCount, wrongAnswerCount } = quizResult;

  const chartData: ChartData = {
    options: {
      labels: ['정답', '오답'],
      fill: {
        colors: ['#038FFB', '#00E497'],
      },
    },
    series: [answerCount, wrongAnswerCount],
  };

  return (
    <div>
      <Title>퀴즈 결과</Title>
      <Result
        playTime={playTime}
        answerCount={answerCount}
        wrongAnswerCount={wrongAnswerCount}
      />
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
      <BottomLinks />
    </div>
  );
}
