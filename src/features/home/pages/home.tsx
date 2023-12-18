import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';

import { Title } from '@/components';
import { ROUTE_PATHS } from '@/constants/routes';

import {
  QuizDescription,
  QuizForm,
  QuizStartButton,
} from '@/features/home/components';

export interface QuizOptionFieldValues {
  amount: string;
  category: string;
  difficulty: string;
}

export default function Home() {
  const navigate = useNavigate();
  const { getValues, register } = useForm<QuizOptionFieldValues>();

  const handleClickGotoQuiz = () => {
    const options = getValues();
    const queryString = qs.stringify({ ...options, type: 'multiple' });

    const url = `${ROUTE_PATHS.QUIZ}?${queryString}`;

    navigate(url);
  };

  return (
    <div className="flex flex-col gap-4">
      <Title>퀴즈 앱</Title>
      <QuizDescription />
      <QuizForm register={register} />
      <QuizStartButton onClick={handleClickGotoQuiz}>퀴즈 풀기</QuizStartButton>
    </div>
  );
}
