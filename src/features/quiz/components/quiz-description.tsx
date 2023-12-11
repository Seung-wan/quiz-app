import type { Quiz } from '../types';

interface QuizDescriptionProps {
  questionNo: number;
  category: Quiz['category'];
  question: string;
  difficulty: Quiz['difficulty'];
}

export default function QuizDescription({
  questionNo,
  category,
  question,
  difficulty,
}: QuizDescriptionProps) {
  return (
    <>
      <div>
        {questionNo}번 문제:{question}
      </div>
      <div>카테고리: {category}</div>
      <div>난이도: {difficulty}</div>
    </>
  );
}
