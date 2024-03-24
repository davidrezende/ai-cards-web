import React, { useEffect, useState } from "react"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { useNavigate } from 'react-router-dom'
import useAuthService from "../services/ServiceAuth"
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import Alerts from "../components/Alerts"
import Loading from "../components/QuestionLoading"
import { NavbarApp } from "../components/NavbarApp"

export const ConfirmationRegisterScreen: React.FC<any> = () => {

  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('Confirmando seu cadastro')
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState<string>('')
  const [alert, setAlert] = useState('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [phraseLogin, setPhraseLogin] = useState('');
  const { userLogin } = useAuthService();


  useEffect(() => {
    console.log('verificando se usuario logado')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setTitle('Cadastro confirmado!')
    }, 3000);
    setMessage('Seu cadastro foi confirmado com sucesso!')
    alertContext('success')
    setTimeout(() => {
      setTitle('Redirecionando...')
      navigate('/login')
    }, 10000);
  }, [])

  function login() {
    navigate('/login')
  }

  function alertContext(type: string) {
    setVisible(true);
    setAlert(type);
  }

  return (
    <>
      <div className="relative h-screen w-screen flex flex-1 flex-col justify-center px-6 py-6 lg:px-9 bg-white absolute bg-opacity-95">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
            {title}
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {loading && <><Loading /><p className="bold mt-10 text-center text-sm text-gray-500 animate-pulse">
            {phraseLogin}
          </p></>}
          {!loading && visible && Alerts(alert, message)}
          {!loading &&
            <p className="mt-10 text-center text-sm text-gray-500">
              Você será redirecionado em instantes
              <br />
              Caso tenha problemas, clique {' '}
              <a onClick={login} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                aqui.
              </a>
            </p>}
        </div>
      </div>
    </>
  )
}



