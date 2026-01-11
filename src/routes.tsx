import { createBrowserRouter, Navigate } from 'react-router';
import { DefaultLayout } from './components/layout/DefaultLayout';
import { UserList } from './pages/UserList';
import { UserCreate } from './pages/UserCreate';
import { UserUpdate } from './pages/UserUpdate';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <UserList />,
      },
      { path: '/create', element: <UserCreate /> },
      { path: '/update/:id', element: <UserUpdate /> },
    ],
  },
  { path: '*', element: <Navigate to="/" replace /> },
]);
