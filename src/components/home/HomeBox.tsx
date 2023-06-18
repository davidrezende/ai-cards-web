import React from 'react';
import { Button, Card, Form } from 'react-daisyui';

export const HomeBox: React.FC<any> = (props) => {

  return (
    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-80">
      <Card.Body>
        <Form className="mt-6">
          <Button className='btn btn-active'>Login</Button>
        </Form>
        <Form className="mt-6">
          <Button className='btn btn-active'>Cadastre-se</Button>
        </Form>
        <Form className="mt-6">
          <Button className='btn btn-active'>Sobre o jogo</Button>
        </Form>
        <Form className="mt-6">
          <Button className='btn btn-active'>Suporte</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}