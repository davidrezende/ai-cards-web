import React, { useEffect, useState } from "react"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { useNavigate } from 'react-router-dom'
import useAuthService from "../services/ServiceAuth"
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import Alerts from "../components/Alerts"

export const RegisterScreen: React.FC<any> = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const [alert, setAlert] = useState('');
  const [error, setError] = useState<string>('');
  const { userRegister } = useAuthService();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/cards');
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await userRegister({
        name,
        email,
        password
      });
      alertContext('success');
    } catch (error) {
      setError("Email já existente.")
      alertContext('error');
      console.log(error);
    }
  };

  function alertContext(type: string) {
    setVisible(true);
    setAlert(type);
  }

  return (
    <div className="max-sm:w-full max-sm:h-full 2xl:h-full flex flex-col justify-center px-6 py-12 lg:px-8 bg-white absolute bg-opacity-95">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Cadastro Eufor-IA
        </h2>
      </div>
      {visible && Alerts(alert, error)}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Nome
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Registrar
            </button>
          </div>
        </form>

        <p className="px-14 mt-10 text-center text-sm text-gray-500">
          Já tem cadastro?{' '}
          <a onClick={() => navigate("/login")} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
            Sign-In
          </a>
        </p>
      </div>
    </div>
  );
};
