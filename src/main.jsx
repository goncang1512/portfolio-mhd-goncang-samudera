import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from './components/pages/Index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Index/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
