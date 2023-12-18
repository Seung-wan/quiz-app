import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { differenceInSeconds } from 'date-fns';

import {
  WithQueryAsyncBoundary,
  Spinner,
  Beforeunload,
  Title,
} from '@/components';
import { ROUTE_PATHS } from '@/constants/routes';
import { shuffle } from '@/utils';

import {
  AnswerList,
  AnswerMessage,
  NextButton,
  QuizDescription,
} from '../components';
import type { QuizFilters } from '../hooks';
import { useQuiz, useQuizsSuspenseQuery } from '../hooks';

function Quiz() {
  const navigate = useNavigate();

  const location = useLocation();
  const quizFilters = useMemo(
    () =>
      qs.parse(location.search, {
        ignoreQueryPrefix: true,
      }),
    [location.search],
  ) as unknown as QuizFilters;

  const {
    quizStartDate,
    currentStep,
    currentAnswer,
    answerCount,
    wrongAnswerCount,
    selectAnswer,
    plusAnswerCount,
    plusWrongAnswerCount,
    goNext,
    setQuizIncorrectQuestionToLocalStorage,
    setQuizResultToLocalStorage,
    removeQuizIncorrectQuestionFromLocalStorage,
  } = useQuiz();

  const { data } = useQuizsSuspenseQuery(quizFilters);

  const { category, question, correct_answer, difficulty, incorrect_answers } =
    data.results[currentStep];

  const answers = useMemo(
    () => shuffle([correct_answer, ...incorrect_answers]),
    [correct_answer, incorrect_answers],
  );

  const answerMessage = useMemo(() => {
    return currentAnswer === correct_answer ? '정답입니다!' : '오답입니다!';
  }, [correct_answer, currentAnswer]);

  const handleClickAnswer = (answer: string) => {
    if (answer === correct_answer) {
      plusAnswerCount();
    } else {
      plusWrongAnswerCount();
      setQuizIncorrectQuestionToLocalStorage(data.results[currentStep]);
    }

    selectAnswer(answer);
  };

  const handleClickNext = () => {
    const quizEndDate = new Date();
    const playTime = differenceInSeconds(quizEndDate, quizStartDate.current);

    const quizResult = {
      playTime,
      answerCount,
      wrongAnswerCount,
    };

    const isLastQuestion = currentStep === quizFilters.amount - 1;

    if (isLastQuestion) {
      setQuizResultToLocalStorage(quizResult);
      navigate(ROUTE_PATHS.QUIZ_RESULT);
      return;
    }

    goNext();
  };

  useEffect(() => {
    removeQuizIncorrectQuestionFromLocalStorage();
  }, [removeQuizIncorrectQuestionFromLocalStorage]);

  return (
    <Beforeunload>
      <div className="flex flex-col gap-2">
        <Title>퀴즈 풀기</Title>
        <QuizDescription
          category={category}
          questionNo={currentStep + 1}
          question={question}
          difficulty={difficulty}
        />
        <AnswerList
          answers={answers}
          currentAnswer={currentAnswer}
          correctAnswer={correct_answer}
          onClickAnswer={handleClickAnswer}
        />
        {currentAnswer && (
          <>
            <AnswerMessage>{answerMessage}</AnswerMessage>
            <NextButton onClick={handleClickNext}>다음 문항</NextButton>
          </>
        )}
      </div>
    </Beforeunload>
  );
}

const QuizPage = WithQueryAsyncBoundary(Quiz, {
  pendingFallback: <Spinner />,
  rejectedFallback: <div>퀴즈 페이지에서 에러가 발생했습니다.</div>,
});

export default QuizPage;
