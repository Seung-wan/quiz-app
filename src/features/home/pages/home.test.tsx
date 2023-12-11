import { screen } from '@testing-library/react';

import { render } from '@/tests/test-helper';

import Home from '@/features/home/pages/Home';

describe('Home Page', () => {
  it('화면에 "퀴즈 앱" 이라는 타이틀이 존재한다.', () => {
    render(<Home />);

    const title = screen.getByText(/퀴즈 앱/);

    expect(title).toBeInTheDocument();
  });

  it('화면에 "퀴즈 풀기" 버튼이 존재한다.', () => {
    render(<Home />);

    const button = screen.getByText(/퀴즈 풀기/);

    expect(button).toBeInTheDocument();
  });
});
