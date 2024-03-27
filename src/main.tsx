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
import Layout from './components/Layout.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { ConfirmationRegisterScreen } from './pages/ConfirmationRegisterScreen.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout title="Eufor-IA - Desenhe a sua imaginação com palavras" description={"Crie seu universo onde os super-heróis e super-vilões são apenas o começo. Cada detalhe, cada aliado que recruta, é feito exclusivamente para você."}><HomeScreen /></Layout>,
  },
  {
    path: "/card/create",
    element: <RequireAuth fallbackPath='/login'>
      <Layout title="Eufor-IA - Criando sua carta" description={""}>
        <CreateCardScreen />
      </Layout>
    </RequireAuth>,
  },
  {
    path: "/profile",
    element: <RequireAuth fallbackPath='/login'>
      <Layout title="Eufor-IA - Seus dados" description={""}>
        <ProfileScreen />
      </Layout>
    </RequireAuth>,
  },
  {
    path: "/cards",
    element:
      <RequireAuth fallbackPath='/login'>
        <Layout title="Eufor-IA - Seu Deck" description={""}>
          <InventoryScreen />
        </Layout>
      </RequireAuth>
  },
  {
    path: "/login",
    element: <Layout title="Eufor-IA - Entrar" description={""}><LoginScreen /></Layout>,
  },
  {
    path: "/share/:cardHash",
    element: <Layout title="Eufor-IA - Carta misteriosa compartilhada" description={"Um velho encapuzado aparece e compartilha com você uma carta misteriosa... nem mesmo ele sabe dizer os perigos que ela pode representar para o mundo. Você saberá? Descubra quem lhe aguarda do outro lado."}><ShareScreen /></Layout>
  },
  {
    path: "/confirmation/:userId/:confirmationId",
    element: <Layout title="Eufor-IA - Confirmação de cadastro" description={""}><ConfirmationRegisterScreen /></Layout>
  },
  {
    path: "/register",
    element: <Layout title="Eufor-IA - Cadastre-se" description={""}><RegisterScreen /></Layout>,
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
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
)
