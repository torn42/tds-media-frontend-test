import { RouterProvider } from 'react-router';
import { router } from './routes';
import { UserProvider } from './contexts/UserProvider';

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
