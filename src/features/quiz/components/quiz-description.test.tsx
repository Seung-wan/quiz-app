import { screen } from '@testing-library/react';

import { render } from '@/tests/test-helper';

import { QuizDescription } from '.';

describe('QuizDescription', () => {
  it('props로 전달한 값이 그대로 표시된다.', () => {
    const props = {
      category: 'Computer Science',
      questionNo: 2,
      question:
        'Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?',
      difficulty: 'easy',
    };

    render(<QuizDescription {...props} />);

    const category = screen.getByText(new RegExp(props.category));
    const questionNo = screen.getByText(new RegExp(String(props.questionNo)));
    const question = screen.getByText(new RegExp(props.question));
    const difficulty = screen.getByText(new RegExp(props.difficulty));

    expect(category).toBeInTheDocument();
    expect(questionNo).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(difficulty).toBeInTheDocument();
  });
});
