import { Component, FunctionComponent, ReactElement, ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useQueryErrorResetBoundary } from 'react-query';

type Props = {
  children: ReactNode;
  errorFallback: ReactElement<unknown, string | FunctionComponent | typeof Component> | null;
  suspenseFallback: ReactNode;
};

function AsyncBoundary(props: Props) {
  const { children, errorFallback, suspenseFallback } = props;
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary fallback={errorFallback} onReset={reset}>
      <Suspense fallback={suspenseFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default AsyncBoundary;
