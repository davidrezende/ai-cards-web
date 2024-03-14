import React from 'react';
import { Button, Dropdown, Menu, Navbar } from 'react-daisyui';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from 'react-router';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

export const NavbarApp: React.FC<any> = () => {

  const signOut = useSignOut()
  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()

  function logout() {
    signOut()
    navigate("/login")
  }

  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-100 bg-opacity-40 rounded-lg">
        <Navbar.Start>
          <a className="btn btn-ghost normal-case text-3xl hover:animate-pulse" onClick={()=> navigate("/")}>Eufor-IA</a>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
        </Navbar.Center>
        <Navbar.End>
          <Button onClick={logout} className='mr-5 rounded-lg  '>{isAuthenticated() ? 'Sair' : 'Entrar'}</Button>
        </Navbar.End>
      </Navbar>
    </div>
  )
}