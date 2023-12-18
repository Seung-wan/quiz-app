import type { UseFormRegister } from 'react-hook-form';

import type { QuizOptionFieldValues } from '@/features/home/pages/home';

interface Option {
  label: string;
  value: string | number;
}

interface QuizFormField {
  label: string;
  name: keyof QuizOptionFieldValues;
  options: Option[];
  register: UseFormRegister<QuizOptionFieldValues>;
}

export default function QuizFormField({
  label,
  name,
  options,
  register,
}: QuizFormField) {
  return (
    <div className="flex w-[180px] justify-between">
      <label htmlFor={name}>{label}</label>
      <select className="ml-2 w-24 border" id={name} {...register(name)}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
