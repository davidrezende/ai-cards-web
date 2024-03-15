import React, { useEffect, useState } from "react"
import useSignIn from "react-auth-kit/hooks/useSignIn"
import { useNavigate } from 'react-router-dom'
import useAuthService from "../services/ServiceAuth"
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import Alerts from "../components/Alerts"
import Loading from "../components/QuestionLoading"
import { NavbarApp } from "../components/NavbarApp"

export const LoginScreen: React.FC<any> = () => {

  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()
  const signIn = useSignIn()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [alert, setAlert] = useState('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [phraseLogin, setPhraseLogin] = useState('');
  const [visible, setVisible] = useState(false);
  const { userLogin } = useAuthService();

  function getRandomElement(array: String[]): String {
    const randomIndex = Math.floor(Math.random() * array.length);
    setPhraseLogin(array[randomIndex].toString());
    return array[randomIndex];
  }

  const greetingsPhrases = [
    'Revelando os segredos mais obscuros...',
    '~ Alohomora!', 'Juro solenemente que não irei fazer nada de bom...',
    'Olá! Você aqui ainda?',
    'Malfeito, feito!',
    '“Estou com medo, Dave.”',
    'Eu vejo gente morta...”',
    'ET, Telefone, Casa.',
    'Grandes poderes trazem grandes responsabilidades',
    'Hasta la vista, Baby',
    'Dadinho o c4r4lho, meu nome é Zé Pequeno',
    'Eu sou seu pai!'
  ];



  useEffect(() => {
    console.log('verificando se usuario logado')
    getRandomElement(greetingsPhrases)
    if (isAuthenticated()) {
      navigate('/cards')
    }
  }, [])

  function createAccount() {
    navigate('/register')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Values: ", email);
    console.log("Values: ", password);

    userLogin(
      {
        "email": email,
        "password": password
      }
    ).then((response) => {
      console.log("response:" + response.data.token)
      setLoading(true)
      if (isAuthenticated() == false) {
        const token = response.data.token;
        const [, payload,] = token.split('.');
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
        setVisible(false)
        setTimeout(() => {
          getRandomElement(greetingsPhrases);
        }, 2000);
        setTimeout(() => {
          getRandomElement(greetingsPhrases);
        }, 2000);
        setTimeout(() => {
          navigate('/cards');
        }, 5000);

      }
    }).catch((error) => {
      setError("Email ou Senha incorretos.")
      alertContext('error');
      console.log(error);
    })
  }

  function alertContext(type: string) {
    setVisible(true);
    setAlert(type);
  }

  return (
    <>
      <div className="relative h-screen w-screen max-sm:w-full max-sm:h-full 2xl:h-full flex flex-1 flex-col justify-center px-6 py-6 lg:px-9 bg-white absolute bg-opacity-95">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {visible && Alerts(alert, error)}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
            Login <a href="/" className="text-indigo-600 ">Eufor-IA </a>
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {loading && <><Loading /><p className="bold mt-10 text-center text-sm text-gray-500 animate-pulse">
            {phraseLogin}
          </p></>}
          {!loading &&
            <form id={"myForm"} className="space-y-6" onSubmit={handleSubmit}>
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
                    className="bg-white indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
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
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white indent-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              </div>
            </form>}

          {!loading &&
            <p className="mt-10 text-center text-sm text-gray-500">
              Ainda não tem cadastro? {' '}
              <a onClick={createAccount} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">
                Cadastre-se aqui.
              </a>
            </p>}
        </div>
      </div>
    </>
  )
}



