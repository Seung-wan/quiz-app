import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/routes';

import { QuizDescription } from '@/features/home/components';

export default function Home() {
  return (
    <div className="flex h-full flex-col  justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl">퀴즈 앱</h2>
        <QuizDescription />
      </div>
      <Link
        className="w-full rounded-md bg-black p-2 text-center text-white"
        to={ROUTE_PATHS.QUIZ}
      >
        퀴즈 풀기
      </Link>
    </div>
  );
}
