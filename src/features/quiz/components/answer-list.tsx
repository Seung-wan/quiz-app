import classNames from 'classnames';

interface AnswerListProps {
  answers: string[];
  currentAnswer: string;
  correctAnswer: string;
  onClickAnswer: (answer: string) => void;
}

export default function AnswerList({
  answers,
  currentAnswer,
  correctAnswer,
  onClickAnswer,
}: AnswerListProps) {
  return (
    <ul>
      {answers.map((answer, index) => {
        const isCorrect = currentAnswer && answer === correctAnswer;
        const isIncorrect = currentAnswer && answer !== correctAnswer;

        return (
          <li className="mt-2 w-full border" key={answer}>
            <button
              onClick={() => onClickAnswer(answer)}
              className={classNames('w-full p-2 text-left', {
                'bg-green-100': isCorrect,
                'bg-red-200': isIncorrect,
              })}
              type="button"
              disabled={!!currentAnswer}
            >
              {index + 1}번: {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
