import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeScreen } from './pages/HomeScreen.tsx'
import { CreateCardScreen } from './pages/CreateCardScreen.tsx'
import { InventoryScreen } from './pages/InventoryScreen.tsx'

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
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
