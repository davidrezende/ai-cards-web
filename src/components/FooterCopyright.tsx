import React, { useEffect } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { Footer } from 'react-daisyui';

export const FooterCopyright: React.FC<any> = () => {

  const currentPathname = window.location.pathname;
  const isAuthenticated = useIsAuthenticated()

  useEffect(() => {
    return () => {
      currentPathname
    }
  }, [])
  if (currentPathname === "/login") return null
  return (
    <footer className="bg-white rounded-lg dark:bg-base-100 m-4">
      {!(currentPathname == '/cards' || currentPathname == '/card/create') &&
        <><div className="w-full max-w-screen-xl mx-auto p-4 md:py-0">

          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Eufor-IA logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><i>Eufor</i><b>-IA</b></span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">

              {!isAuthenticated() &&
                <li>
                  <a href="/register" className="hover:underline me-4 md:me-6">Cadastre-se</a>
                </li>
              }
              <li>
                <a href="/about" className="hover:underline me-4 md:me-6">Sobre</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Suporte</a>
              </li>
            </ul>
          </div>
        </div><hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /><span className="block text-sm sm:text-center dark:text-gray-400">O jogo onde cada decisão é uma obra-prima de realidade</span><br /></>
      }
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 items-center">© 2023 <a href="/" className="hover:underline"><i>Eufor</i><b>IA</b>™</a>. All Rights Reserved.<br />made with ❤️</span>
      <br />
    </footer>
  )
}