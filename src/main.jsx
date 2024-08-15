import { StrictMode, } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root'
import Products from './Pasge/Products'
import About from './Pasge/About'

import Home from './Pasge/Home'
import NotFound from './components/NotFound/NotFound'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Login from './Pasge/Login/Login'
import Register from './Register/Register'
import AuthProvider from './Provider/AuthProvider'




const url = "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(url)

      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch(url),

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: (object) => fetch(`https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses/${object.params.id}`)
      }

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
