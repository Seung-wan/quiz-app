import { ReactNode, useEffect } from 'react';

interface BeforeunloadProps {
  children: ReactNode;
}

export default function Beforeunload({ children }: BeforeunloadProps) {
  useEffect(() => {
    const handleBeforeunload = (e: BeforeUnloadEvent) => {
      e.preventDefault();

      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeunload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeunload);
    };
  }, []);

  return children;
}
