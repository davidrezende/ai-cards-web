import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeScreen } from './pages/HomeScreen.tsx'
import { CreateCardScreen } from './pages/CreateCardScreen.tsx'
import { InventoryScreen } from './pages/InventoryScreen.tsx'
import { LoginScreen } from './pages/LoginScreen.tsx'
import Spline from '@splinetool/react-spline';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/card/create",
    element: <CreateCardScreen />,
  },
  {
    path: "/cards",
    element: <InventoryScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='h-screen w-screen relative justify-center flex flex-col items-center flex-row'>
      <Spline className="absolute" scene="https://prod.spline.design/mXKWOM99x7qsEGCF/scene.splinecode" />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
