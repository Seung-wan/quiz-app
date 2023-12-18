import { Link } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/routes';

export default function BottomLink() {
  return (
    <div className="mt-4 text-center underline">
      <Link to={ROUTE_PATHS.QUIZ_RESULT}>결과페이지로</Link>
    </div>
  );
}
