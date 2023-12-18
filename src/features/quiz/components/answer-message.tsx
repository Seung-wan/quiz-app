import type { ReactNode } from 'react';

interface AnswerMessageProps {
  children: ReactNode;
}

export default function AnswerMessage({ children }: AnswerMessageProps) {
  return <div>{children}</div>;
}
