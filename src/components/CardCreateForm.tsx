import React from 'react';
import { Button, Card, Input } from 'react-daisyui';
import { CardService } from '../services/ServiceCard';
export const CardCreateForm: React.FC<any> = (props) => {


  const handleCreateCardText = async () => {
    console.log('teste')
    await CardService.generateCardText(
      {
        "userId": "be29b328-7d0b-473e-b74a-93dd361fc0eb",
        "questions": [
          {
            "questionId": "fe8baef1-de96-4397-8558-a4afa9b61c0a",
            "answer": "Mulher, insegura, bonita"
          },
          {
            "questionId": "4c9e5bf8-326f-44e2-901a-b39d4fa0a442",
            "answer": "colegial, escola"
          },
          {
            "questionId": "aeb552b4-1e01-425a-84d6-f65448b29e65",
            "answer": "ser aceita por quem ela é e não pelas aparências."
          }
        ]
      }
    ).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Card className='bg-base-300 p-10 bg-opacity-50'>
        <div className=''>
          <Card.Title className='animate-bounce font-extrabold text-xl font-mono boboca'>
            Quais são as características físicas do seu personagem?
          </Card.Title>
        </div>
        <Card.Body className=''>
          <div className="flex w-full component-preview p-4 items-center justify-center font-sans">
            <Input className='text-2xl btn-lg w-full rounded-md py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ' />
          </div>
          <Button
            className='btn-active font-bold text-2xl font-mono normal-case'
            dataTheme='light'
            onClick={handleCreateCardText}>Criar Carta</Button>
        </Card.Body>
      </Card>
    </div>
  )

}

function delay(arg0: number) {
  throw new Error('Function not implemented.');
}
