import React from 'react';
import { Button, Card, Form } from 'react-daisyui';

export const HomeBoxButtons: React.FC<any> = () => {

  return (
    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-80">
      <Card.Body>
        <Form className="mt-6">
          <Button className='btn btn-active font-bold text-xl font-mono normal-case ' dataTheme='light'>Login</Button>
        </Form>
        <Form className="mt-6">
          <Button className='btn btn-active font-bold text-xl font-mono normal-case' dataTheme='light'>Cadastre-se</Button>
        </Form>
        <Form className="mt-6">
          <Button className='btn btn-active font-bold text-xl font-mono normal-case' dataTheme='light'>Sobre o jogo</Button>
        </Form>
        <Form className="mt-6">
          <Button className='btn btn-active font-bold text-xl font-mono normal-case' dataTheme='light'>Suporte</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}