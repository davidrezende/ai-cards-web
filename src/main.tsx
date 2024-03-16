import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomeScreen } from './pages/HomeScreen.tsx'
import { CreateCardScreen } from './pages/CreateCardScreen.tsx'
import { InventoryScreen } from './pages/InventoryScreen.tsx'
import { LoginScreen } from './pages/LoginScreen.tsx'
import { RegisterScreen } from './pages/RegisterScreen.tsx'
import AuthProvider from "react-auth-kit";
import createStore from 'react-auth-kit/createStore';
import RequireAuth from '@auth-kit/react-router/RequireAuth'
import { ProfileScreen } from './pages/ProfileScreen.tsx'
import { ShareScreen } from './pages/ShareScreen.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/card/create",
    element: <RequireAuth fallbackPath='/login'>
      <CreateCardScreen />
    </RequireAuth>,
  },
  {
    path: "/profile",
    element: <RequireAuth fallbackPath='/login'>
      <ProfileScreen />
    </RequireAuth>,
  },
  {
    path: "/cards",
    element:
      <RequireAuth fallbackPath='/login'>
        <InventoryScreen />
      </RequireAuth>
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/share/:cardHash",
    element: <ShareScreen />
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  }
]);

const store = createStore({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: false,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div>
    <React.StrictMode>
        <AuthProvider store={store}>
          <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
  </div>
)
