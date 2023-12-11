import { fireEvent, render, screen } from '@testing-library/react';

import { ErrorBoundary } from '.';

describe('ErrorBoundary', () => {
  it('자식 컴포넌트에서 에러가 발생했을 때 에러메시지가 보여진다.', () => {
    const Child = () => {
      throw new Error();
    };

    render(
      <ErrorBoundary rejectedFallback={<div>에러 발생!!!</div>}>
        <Child />
      </ErrorBoundary>,
    );

    const errorMessage = screen.getByText(/에러 발생!!!/);

    expect(errorMessage).toBeInTheDocument();
  });

  it('자식 컴포넌트에서 에러가 발생했을 때 "다시 시도하기" 버튼을 클릭하면 reset 함수가 실행된다.', () => {
    const Child = () => {
      throw new Error();
    };

    const reset = jest.fn();

    render(
      <ErrorBoundary rejectedFallback={<div>에러 발생!!!</div>} reset={reset}>
        <Child />
      </ErrorBoundary>,
    );

    const resetButton = screen.getByText(/다시 시도하기/);
    fireEvent.click(resetButton);

    expect(reset).toHaveBeenCalled();
  });
});
