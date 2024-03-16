import React from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import { Button, Card, Form } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';

export const HomeBoxButtons: React.FC<any> = () => {
  const isAuthenticated = useIsAuthenticated()
  const navigate = useNavigate()
  return (
    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-80">
      <Card.Body>
        {isAuthenticated() &&
          <Form className="mt-6">
            <Button className='btn btn-active font-bold text-xl font-mono normal-case ' dataTheme='light' onClick={() => navigate("/login")}>Entrar</Button>
          </Form>
        }
        {!isAuthenticated() &&
          <Form className="mt-6">
            <Button className='btn btn-active font-bold text-xl font-mono normal-case' dataTheme='light' onClick={() => navigate("/register")}>Cadastre-se</Button>
          </Form>
        }

        <Form className="mt-6">
          <Button className='btn btn-active font-bold text-xl font-mono normal-case' dataTheme='light' onClick={() => navigate("/about")}>Sobre o jogo</Button>
        </Form>
        <Form className="mt-6">
          <Button className='btn btn-active font-bold text-xl font-mono normal-case' dataTheme='light' onClick={() => navigate("/support")}>Suporte</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}