import { render } from '@testing-library/react';

import { Beforeunload } from '@/components';

describe('Beforeunload', () => {
  it('새로고침을 했을 때 브라우저 팝업이 뜬다.', () => {
    window.onbeforeunload = jest.fn();

    const Child = () => {
      return <div>child</div>;
    };

    render(
      <Beforeunload>
        <Child />
      </Beforeunload>,
    );

    window.dispatchEvent(new Event('beforeunload'));

    expect(window.onbeforeunload).toHaveBeenCalled();
  });
});
