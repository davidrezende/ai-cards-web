import React from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { Button, Card, Form } from 'react-daisyui';
import IUserData from '../shared/types/ResponseUserData';
import { useNavigate } from 'react-router-dom';

export const MenuProfile: React.FC<any> = () => {
  const authUser = useAuthUser<IUserData>()
  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()

  return (
      <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-80 ">
        <Card.Title className='font-bold justify-center mt-4'>Opa, CALABRESO!</Card.Title>
      <Card.Body>
        <Form><Button className='mt-2 btn btn-active font-bold text-xl font-mono normal-case bg-warning' dataTheme='light' onClick={() => navigate("/profile")}>Perfil</Button>
          <Button className='mt-1 btn btn-active font-bold text-xl font-mono normal-case bg-warning' dataTheme='light' onClick={() => navigate("/card/create")}>+ Nova Carta</Button>
          <Button className='mt-1 btn btn-disabled font-bold text-xl font-mono normal-case bg-gray-500' dataTheme='light' onClick={() => navigate("/duel")}>Duelar</Button>
        </Form>
      </Card.Body>
    </Card>
  )

}