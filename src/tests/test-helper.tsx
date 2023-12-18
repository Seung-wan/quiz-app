import type { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render as originalRender } from '@testing-library/react';

import { ROUTE_PATHS } from '@/constants/routes';

export function render(element: ReactElement) {
  return originalRender(
    <MemoryRouter initialEntries={[ROUTE_PATHS.HOME]}>{element}</MemoryRouter>,
  );
}
