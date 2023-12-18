import type { ReactNode } from 'react';

interface QuizStartButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function QuizStartButton({
  onClick,
  children,
}: QuizStartButtonProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="w-full rounded-md bg-black p-2 text-center text-white"
    >
      {children}
    </button>
  );
}
