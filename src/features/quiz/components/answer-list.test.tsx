import { screen } from '@testing-library/react';

import { render } from '@/tests/test-helper';

import { AnswerList } from '.';

describe('AnswerList', () => {
  it('props로 전달된 answers가 리스트로 출력된다.', () => {
    const props = {
      answers: ['1bit', '2bit', '4bit', '8bit'],
      currentAnswer: '1bit',
      correctAnswer: '2bit',
      onClickAnswer: (answer: string) => {
        answer;
      },
    };

    render(<AnswerList {...props} />);

    for (let i = 0; i < props.answers.length; i += 1) {
      const answer = screen.getByText(
        new RegExp(`${i + 1}번: ${props.answers[i]}`),
      );

      expect(answer).toBeInTheDocument();
    }
  });

  it('currentAnswer과 correctAnswer이 같으면 배경색이 bg-green-100이 된다.', () => {
    const props = {
      answers: ['1bit', '2bit', '4bit', '8bit'],
      currentAnswer: '1bit',
      correctAnswer: '1bit',
      onClickAnswer: (answer: string) => {
        answer;
      },
    };

    render(<AnswerList {...props} />);

    const correctAnswer = screen.getByText(new RegExp(props.currentAnswer));

    expect(correctAnswer).toHaveClass('bg-green-100');
  });

  it('currentAnswer과 correctAnswer이 다르면 배경색이 bg-red-200이 된다.', () => {
    const props = {
      answers: ['1bit', '2bit', '4bit', '8bit'],
      currentAnswer: '1bit',
      correctAnswer: '8bit',
      onClickAnswer: (answer: string) => {
        answer;
      },
    };

    render(<AnswerList {...props} />);

    const correctAnswer = screen.getByText(new RegExp(props.currentAnswer));

    expect(correctAnswer).toHaveClass('bg-red-200');
  });
});
