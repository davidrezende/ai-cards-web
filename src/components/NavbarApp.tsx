import React from 'react';
import { Button, Dropdown, Menu, Navbar } from 'react-daisyui';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from 'react-router';

export const NavbarApp: React.FC<any> = () => {

  const signOut = useSignOut()
  const navigate = useNavigate()

  function logout() {
    signOut()
    navigate("/login")
  }

  return (
    <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="bg-base-100 bg-opacity-40 rounded-lg">
        <Navbar.Start>
          <a className="btn btn-ghost normal-case text-xl" onClick={()=> navigate("/")}>Eufor-IA</a>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
        </Navbar.Center>
        <Navbar.End>
          <Button onClick={logout} className='mr-5 rounded-lg'>Sair</Button>
        </Navbar.End>
      </Navbar>
    </div>
  )
}