import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { Button, Card, Form } from 'react-daisyui';
import IUserData from '../shared/types/ResponseUserData';
import { useNavigate } from 'react-router-dom';


type ListProps = {
  userData: IUserData | undefined;
};



export const MenuProfile: React.FC<ListProps> = ({ userData }) => {

  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()

  // Função para selecionar um elemento aleatório de uma lista
  function getRandomElement<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  // Lista pre-definida
  const predefinedList = ['Fala aí', 'Hola manito(a)', 'Opa', 'Oi', 'Bem vindo'];

  // Seleciona um elemento aleatório da lista
  const randomElement = getRandomElement(predefinedList);
  return (
    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-80 ">
      <Card.Title className='w-full justify-center mt-4 text-3xl'>{randomElement},<br/><p className='font-bold'>{userData!.name}</p></Card.Title>
      <Card.Body>
        <Form><Button className='mt-2 btn btn-active font-bold text-xl font-mono normal-case bg-warning' dataTheme='light' onClick={() => navigate("/profile")}>Perfil</Button>
          <Button className='mt-5 btn btn-active font-bold text-xl font-mono normal-case bg-warning' dataTheme='light' onClick={() => navigate("/card/create")}>+ Nova Carta</Button>
          <Button className='mt-5 btn btn-disabled font-bold text-xl font-mono normal-case bg-gray-500' dataTheme='light' onClick={() => navigate("/duel")}>Duelar</Button>
        </Form>
      </Card.Body>
    </Card>
  )

}