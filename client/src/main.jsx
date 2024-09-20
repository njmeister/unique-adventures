import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from '@/App.jsx';
import '@/index.css';
import Homepage from '@/pages/Homepage';
import playRoutes from '@/routes/PlayRoutes.jsx';
import SelectGamePage from '@/pages/SelectGamePage';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
		// element: <SelectGamePage />,
      },
      ...playRoutes,
	  {
		path: '*',
		element: <SelectGamePage/>,
	  },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);