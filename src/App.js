import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import JournalCreateForm from './pages/JournalCreateForm/JournalCreateForm';
import JournalDetailPage from './pages/JournalDetailPage/JournalDetailPage';
import { JournalsProvider } from './context/JournalsContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  { path: '/:journalId', element: <JournalDetailPage /> },
]);

function App() {
  return (
    <JournalsProvider>
      <RouterProvider router={router} />;
    </JournalsProvider>
  );
}

export default App;
