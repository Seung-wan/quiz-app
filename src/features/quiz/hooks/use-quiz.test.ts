import { act, renderHook } from '@testing-library/react';

import { useQuiz } from '.';

describe('useQuiz', () => {
  it('selectAnswer 함수를 실행하면 인자값이 currentAnswer에 저장된다.', () => {
    const { result } = renderHook(() => useQuiz());

    const selectAnswer = result.current.selectAnswer;

    expect(result.current.currentAnswer).toBe('');

    act(() => {
      selectAnswer('this is answer!!!');
    });

    expect(result.current.currentAnswer).toBe('this is answer!!!');
  });

  it('goPrev 함수를 실행하면 currentStep이 -1 된다.', () => {
    const { result } = renderHook(() => useQuiz());

    const goNext = result.current.goNext;
    const goPrev = result.current.goPrev;

    expect(result.current.currentStep).toBe(0);

    act(() => {
      goNext();
    });

    expect(result.current.currentStep).toBe(1);

    act(() => {
      goPrev();
    });

    expect(result.current.currentStep).toBe(0);
  });

  it('goNext 함수를 실행하면 currentStep이 +1 된다.', () => {
    const { result } = renderHook(() => useQuiz());

    const goNext = result.current.goNext;

    expect(result.current.currentStep).toBe(0);

    act(() => {
      goNext();
    });

    expect(result.current.currentStep).toBe(1);
  });

  it('goNext 함수를 실행하면 currentAnswer가 빈 문자열로 초기화된다.', () => {
    const { result } = renderHook(() => useQuiz());

    const selectAnswer = result.current.selectAnswer;
    const goNext = result.current.goNext;

    expect(result.current.currentStep).toBe(0);
    expect(result.current.currentAnswer).toBe('');

    act(() => {
      selectAnswer('this is answer!!!');
    });

    expect(result.current.currentAnswer).toBe('this is answer!!!');

    act(() => {
      goNext();
    });

    expect(result.current.currentStep).toBe(1);
    expect(result.current.currentAnswer).toBe('');
  });
});
