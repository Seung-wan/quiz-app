const QUIZ_DESCRIPTIONS = [
  '문항에 대한 답안을 4개 보기중에 선택할 수 있어요.',
  '답안 선택 후 다음 문항 버튼을 클릭하면 다음 문항으로 이동할 수 있어요.',
  '답안이 맞았는지 틀렸는지 바로 알 수 있어요.',
];

const RESULT_DESCRIPTIONS = [
  '퀴즈를 마칠 때까지 소요된 시간',
  '정답 개수',
  '오답 수',
  '정 오답에 대한 비율을 차트로 표기',
];

export default function QuizDescription() {
  return (
    <>
      <div className="text-xl">퀴즈는 아래와 같이 진행될 예정이에요.</div>
      <ul className="list-disc px-4">
        {QUIZ_DESCRIPTIONS.map(quizDescription => (
          <li key={quizDescription}>{quizDescription}</li>
        ))}
      </ul>
      <div className="text-xl">
        모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있어요.
      </div>
      <ul className="list-disc px-4">
        {RESULT_DESCRIPTIONS.map(resultDescription => (
          <li key={resultDescription}>{resultDescription}</li>
        ))}
      </ul>
    </>
  );
}
