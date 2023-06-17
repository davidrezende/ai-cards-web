import React from 'react';
import { Button, Card, Form, Hero, Input, Link } from 'react-daisyui';

export const HomeBox: React.FC<any> = (props) => {

  return (
    <Hero>
      <Hero.Content className="flex-col lg:flex-row ">
        <div className="text-center lg:text-left mr-52">
          <h1 className="text-5xl font-bold">Cards customizados por IA</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <h2 className="text-4xl font-bold">Batalhe com seus amigos!</h2>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
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
      </Hero.Content>
    </Hero>
  )
}