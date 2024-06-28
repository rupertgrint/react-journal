import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import JournalCreateForm from './pages/JournalCreateForm/JournalCreateForm';
import JournalDetailPage from './pages/JournalDetailPage/JournalDetailPage';
import { JournalsProvider } from './context/JournalsContext';
import DeletePage from './pages/DeletePage/DeletePage';
import EditPage from './pages/EditPage/EditPage';
import { DarkModeProvider } from './context/DarkModeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  { path: '/:journalId', element: <JournalDetailPage /> },
  { path: '/delete/:journalId', element: <DeletePage /> },
  { path: '/newJournal', element: <JournalCreateForm /> },
  { path: '/edit/:journalId', element: <EditPage /> },
]);

function App() {
  return (
    <DarkModeProvider>
      <JournalsProvider>
        <RouterProvider router={router} />;
      </JournalsProvider>
    </DarkModeProvider>
  );
}

export default App;
