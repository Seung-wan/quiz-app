import type { ReactNode } from 'react';

interface NextButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function NextButton({ onClick }: NextButtonProps) {
  return (
    <button className="bg-black p-2 text-white" onClick={onClick} type="button">
      다음 문항
    </button>
  );
}
