import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ViewDetails from './pages/ViewDetails.jsx'
import AddProduct from './pages/AddProduct.jsx'
import RemoveProduct from './pages/RemoveProduct.jsx'
import EditDetails from './pages/EditDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element:<Dashboard/>
      },
      {
        path: '/viewdetails',
        element:<ViewDetails/>

      },
      {
        path: '/addproduct',
        element:<AddProduct/>

      },
      {
        path: '/removeproduct',
        element:<RemoveProduct/>

      },
      {
        path: '/editdetails',
        element:<EditDetails/>

      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
