import type { ReactNode } from 'react';

interface NextButtonProps {
  onClick: () => void;
  children: ReactNode;
}

export default function NextButton({ onClick, children }: NextButtonProps) {
  return (
    <button className="bg-black p-2 text-white" onClick={onClick} type="button">
      {children}
    </button>
  );
}
