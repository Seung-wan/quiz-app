import type { ComponentType, ReactNode } from 'react';
import { Suspense } from 'react';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';

import { ErrorBoundary } from '.';

export default function WithQueryAsyncBoundary(
  Component: ComponentType<Record<string, unknown>>,
  {
    pendingFallback,
    rejectedFallback,
  }: {
    pendingFallback: ReactNode;
    rejectedFallback: ReactNode;
  },
) {
  const Wrapped = (props: Record<string, unknown>) => {
    const { reset } = useQueryErrorResetBoundary();

    return (
      <ErrorBoundary rejectedFallback={rejectedFallback} reset={reset}>
        <Suspense fallback={pendingFallback}>
          <Component {...props} />
        </Suspense>
      </ErrorBoundary>
    );
  };

  if (!import.meta.env.PROD) {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const name = Component.displayName || Component.name || 'Component';
    Wrapped.displayName = `withAsyncBoundary(${name})`;
  }

  return Wrapped;
}
