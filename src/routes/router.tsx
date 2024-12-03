import { createBrowserRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import FlowPage from '../pages/FlowPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/flow',
    element: <FlowPage />,
  },
]);

export default router;
