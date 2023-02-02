import React from 'react'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from '../layouts/Layout'
import LoginLayout from '../layouts/LoginLayout'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Register from '../pages/Register'
import Service from '../pages/Service'
import Private from '../pages/Private'

const router = createBrowserRouter([
  {
    path: '/login',
    element : <LoginLayout />,
    children : [
      { index: true, element : <Login />},
      { path: 'register', element : <Register />},
    ]
  },
  {
    path : '/',
    element : <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // { path : '/' , element : <Home /> },
      { index : true , element : <Home /> },
      { path : 'product' , element : <Product /> },
      { path : 'service' , element : <Service /> },
      { path : 'private' , element : <Private /> },
    ]
  }
])

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router