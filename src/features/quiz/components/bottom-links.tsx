import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/routes';

export default function BottomLinks() {
  return (
    <div className="mt-4 flex w-full flex-col gap-2  text-white">
      <Link
        className="flex  h-12 items-center justify-center  bg-black"
        to={ROUTE_PATHS.HOME}
      >
        메인 화면
      </Link>
      <Link
        className="flex h-12 items-center justify-center bg-black"
        to={ROUTE_PATHS.QUIZ_INCORRECT_ANSWER_NOTE}
      >
        오답노트 보러가기
      </Link>
    </div>
  );
}
