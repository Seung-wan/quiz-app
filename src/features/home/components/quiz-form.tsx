import type { UseFormRegister } from 'react-hook-form';

import type { QuizOptionFieldValues } from '@/features/home/pages/home';
import { QuizFormField } from '@/features/home/components';

const AMOUNTS = [
  { label: '5', value: 5 },
  { label: '10', value: 10 },
  { label: '15', value: 15 },
  { label: '20', value: 20 },
];

const CATEGORIES = [
  {
    label: '컴퓨터',
    value: 18,
  },
  {
    label: '운동',
    value: 21,
  },
  {
    label: '동물',
    value: 27,
  },
];

const DIFFICULTIES = [
  {
    label: '쉬움',
    value: 'easy',
  },
  {
    label: '중간',
    value: 'medium',
  },
  {
    label: '어려움',
    value: 'hard',
  },
];

interface QuizOptionProps {
  register: UseFormRegister<QuizOptionFieldValues>;
}

export default function QuizForm({ register }: QuizOptionProps) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="text-xl">퀴즈 옵션</h3>
      <QuizFormField
        label="질문 개수"
        name="amount"
        options={AMOUNTS}
        register={register}
      />
      <QuizFormField
        label="카테고리"
        name="category"
        options={CATEGORIES}
        register={register}
      />
      <QuizFormField
        label="난이도"
        name="difficulty"
        options={DIFFICULTIES}
        register={register}
      />
    </div>
  );
}
