import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import App from './App.jsx';
import './index.css';
import playRoutes from './routes/PlayRoutes.jsx';

// Dynamically import components
const Homepage = lazy(() => import('./pages/Homepage'));
const SelectGamePage = lazy(() => import('./pages/SelectGamePage'));

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
    //   {
    //     path: '/',
    //     element: (
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <Homepage />
    //       </Suspense>
    //     ),
    //   },
      ...playRoutes,
      {
        path: '*',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SelectGamePage />
          </Suspense>
        ),
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);