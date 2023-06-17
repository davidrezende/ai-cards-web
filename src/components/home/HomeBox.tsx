import React from 'react';
import { Button, Card, Form } from 'react-daisyui';

export const HomeBox: React.FC<any> = (props) => {

  return (
    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <Card.Body>
        <Form className="mt-6">
          <Button>Login</Button>
        </Form>
        <Form className="mt-6">
          <Button>Cadastre-se</Button>
        </Form>
        <Form className="mt-6">
          <Button>Sobre o jogo</Button>
        </Form>
        <Form className="mt-6">
          <Button>Suporte</Button>
        </Form>
      </Card.Body>
    </Card>
  )
}