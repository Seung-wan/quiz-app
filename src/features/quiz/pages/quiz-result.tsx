import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import type { Props as ChartData } from 'react-apexcharts';

import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';
import { ROUTE_PATHS } from '@/constants/routes';
import { getTimeLabel } from '@/utils/date';
import { LocalStorage } from '@/utils/local-storage';

const DEFAULT_QUIZ_RESULT = {
  playTime: 0,
  answerCount: 0,
  wrongAnswerCount: 0,
};

export default function QuizResult() {
  const data =
    LocalStorage.getItem(LOCAL_STORAGE_KEYS.QUIZ_RESULT) ?? DEFAULT_QUIZ_RESULT;

  const { playTime, answerCount, wrongAnswerCount } = data;
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
      <h1 className="text-center text-3xl">퀴즈 결과</h1>
      <div className="mt-4">퀴즈를 푸시느라 수고하셨어요.</div>
      <div>고객님의 결과는 아래와 같아요!</div>
      <ul className="mt-4 list-disc pl-3">
        <li>퀴즈를 마칠 때까지 소요된 시간: {getTimeLabel(playTime)}</li>
        <li>정답 개수: {answerCount}</li>
        <li>오답 수: {wrongAnswerCount}</li>
      </ul>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
      <div className="mt-4 flex w-full flex-col gap-2  text-white">
        <Link
          className="flex  h-12 items-center justify-center  bg-black"
          to={ROUTE_PATHS.QUIZ}
        >
          다시 풀어보기
        </Link>
        <Link
          className="flex h-12 items-center justify-center bg-black"
          to={ROUTE_PATHS.QUIZ_INCORRECT_ANSWER_NOTE}
        >
          오답노트 보러가기
        </Link>
      </div>
    </div>
  );
}
