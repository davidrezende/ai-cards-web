import React, { useEffect, useState } from "react"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { useNavigate, useParams } from 'react-router-dom'
import useAuthService from "../services/ServiceAuth"
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import Alerts from "../components/Alerts"
import Loading from "../components/QuestionLoading"
import { NavbarApp } from "../components/NavbarApp"

export const ConfirmationRegisterScreen: React.FC<any> = () => {

  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('Confirmando seu cadastro...')
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState<string>('')
  const [alert, setAlert] = useState('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [confirmed, setConfirmed] = useState(false);
  const [phraseLogin, setPhraseLogin] = useState('');
  const { userConfirmationRegister } = useAuthService();
  const isAuthenticated = useIsAuthenticated()
  const { userId, confirmationId } = useParams<{ userId: string, confirmationId: string }>();


  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/cards')
    } else {
      if (!!userId && !!confirmationId) {
        console.log('user:' + userId + '  ' + 'confirmationCode:' + confirmationId)
        setTimeout(() => {
        userConfirmationRegister({
          "userId": userId,
          "confirmationId": confirmationId
        })
          .then((response) => {
            if (response.status == 200) {
              setLoading(true)
              setTimeout(() => {
                setLoading(false)
                setConfirmed(true)
                setTitle('Cadastro confirmado!')
              }, 1500);
              setMessage('Seu cadastro foi confirmado com sucesso!')
              alertContext('success')
              setTimeout(() => {
                setLoading(true)
                setTitle('Aguarde. Faça login e divirta-se :)')
              }, 8000);
              setTimeout(() => {
                navigate('/login')
              }, 10000);
            } 
            console.log(response.data)
          }
          ).catch((error) => {
            setConfirmed(false)
            setLoading(false)
            setTitle('Erro ao validar cadastro :(');
            setMessage('Seu cadastro não foi validado. Por favor, tente novamente ou entre em contato com o suporte.')
            alertContext('error')
            

            console.log(error)
          })
        }, 5000);
      }
    }
    console.log('user:' + userId + '  ' + 'confirmationCode:' + confirmationId)

    console.log('verificando se usuario logado')

  }, [])

  function login() {
    navigate('/login')
  }

  function support() {
    navigate('/support')
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
          {!loading && visible && confirmed &&
            <p className="mt-10 text-center text-sm text-gray-500">
              Você será redirecionado em instantes
              <br />
              Caso tenha problemas, clique {' '}
              <a onClick={login} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                aqui.
              </a>
            </p>}
            {!loading && visible && !confirmed &&
            <p className="mt-10 text-center text-sm text-gray-500">
              Acesse o suporte, clique {' '}
              <a onClick={support} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                aqui.
              </a>
            </p>}
        </div>
      </div>
    </>
  )
}



