import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
  </div>,
)
