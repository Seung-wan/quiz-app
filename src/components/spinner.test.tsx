import { render } from '@/tests';

import { Spinner } from '.';
import { screen } from '@testing-library/react';

describe('Spinner', () => {
  it('container와 spinner의 스타일이 정상적으료 적용된다.', () => {
    render(<Spinner />);

    const container = screen.getByTestId('container');
    const spinner = screen.getByTestId('spinner');

    expect(container).toHaveClass(
      'absolute',
      'left-1/2',
      'top-1/2',
      '-translate-x-1/2',
      '-translate-y-1/2',
    );
    expect(spinner).toHaveClass('animate-spin', 'border-t-[#FF5539]');
  });
});
