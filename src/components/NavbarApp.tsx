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
        <Dropdown>
          <Button color="ghost" tabIndex={0} className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </Button>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
            <Dropdown.Item>Início</Dropdown.Item>
            <Dropdown.Item>Sobre</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a className="btn btn-ghost normal-case text-xl">Eufor-IA</a>
      </Navbar.Start>
      <Navbar.Center className="hidden lg:flex">
        <Menu horizontal className="p-0">
          <Menu.Item>
            <a>Início</a>
          </Menu.Item>
          <Menu.Item>
            <a>Sobre</a>
          </Menu.Item>
        </Menu>
      </Navbar.Center>
      <Navbar.End>
        <Button onClick={logout} className='mr-5 rounded-lg'>Sair</Button>
      </Navbar.End>
    </Navbar>
  </div>
  )
}