import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routes } from '@/routes/routes';

const container = document.getElementById('root');

if (container) {
  const router = createBrowserRouter(routes);

  createRoot(container).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
