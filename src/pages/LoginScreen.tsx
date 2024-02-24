import React, { useEffect, useState } from "react"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { useNavigate } from 'react-router-dom'
import { UserService } from "../services/ServiceUser"
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

export const LoginScreen: React.FC<any> = (props) => {

  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()
  const signIn = useSignIn()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    console.log('verificando se usuario logado')
    if (isAuthenticated()) {
      navigate('/cards')
    }
  }, [])

  function createAccount() {
    navigate('/register')
  }

  const onSubmit = async () => {
    console.log("Values: ", email);
    console.log("Values: ", password);

    await UserService.userLogin(
      {
        "email": email,
        "password": password
      }
    ).then((response) => {
      console.log("response:" + response.data.token)
      if (isAuthenticated() == false ) {
        const token = response.data.token;
        const [header, payload, signature] = token.split('.');
        const decodedPayload = atob(payload);
        const parsedPayload = JSON.parse(decodedPayload);
        const sub = parsedPayload.sub;
        console.log("sub:" + sub); // Output: 1234567890
        signIn({
          auth: {
            token: token,
            type: 'Bearer'
          },
          userState: {
            userId: sub
          }
        })
        navigate('/cards')
      }
    }).catch((error) => {
      console.log(error)
    })
  }

  // nao reload no form
  var form = document.getElementById("myForm");
  function submitForm(event: any) {
    event.preventDefault();
  }

  form?.addEventListener('submit', submitForm);

  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white absolute bg-opacity-95">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login Ai-Cards
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id={"myForm"} className="space-y-6">
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
                onChange={e => setEmail(e.target.value)}
                required
                className="bg-white indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Senha
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="bg-white indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={onSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Ainda não tem cadastro?{' '}
          <a onClick={createAccount} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Cadastre-se aqui.
          </a>
        </p>
      </div>
    </div>
  )
}



