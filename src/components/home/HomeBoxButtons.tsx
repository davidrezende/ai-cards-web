import React from 'react';
import { Button, Card, Form } from 'react-daisyui';
import { useNavigate } from 'react-router-dom';

export const HomeBoxButtons: React.FC<any> = () => {
  const navigate = useNavigate()
  return (
    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-80">
      <Card.Body>
        <Form className="mt-6">
          <Button className='btn btn-active font-bold text-xl font-mono normal-case ' dataTheme='light' onClick={() => navigate("/login")}>Login</Button>
        </Form>
        <Form className="mt-6">
          <Button className='btn btn-active font-bold text-xl font-mono normal-case' dataTheme='light' onClick={() => navigate("/register")}>Cadastre-se</Button>
        </Form>
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