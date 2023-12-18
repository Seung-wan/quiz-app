import type { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <h1 className="text-center text-3xl">{children}</h1>;
}
