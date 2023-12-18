import { getTimeLabel } from '@/utils';

interface ResultProps {
  playTime: number;
  answerCount: number;
  wrongAnswerCount: number;
}
export default function Result({
  playTime,
  answerCount,
  wrongAnswerCount,
}: ResultProps) {
  return (
    <>
      <div className="mt-4">퀴즈를 푸시느라 수고하셨어요.</div>
      <div>고객님의 결과는 아래와 같아요!</div>
      <ul className="mt-4 list-disc pl-3">
        <li>퀴즈를 마칠 때까지 소요된 시간: {getTimeLabel(playTime)}</li>
        <li>정답 개수: {answerCount}</li>
        <li>오답 수: {wrongAnswerCount}</li>
      </ul>
    </>
  );
}
