import React from 'react';
import { Button, Card, Form } from 'react-daisyui';
import cardimg from './../assets/magonegro.png';

export const MenuProfile: React.FC<any> = (props) => {

  return (
    <Card className="flex-shrink-0 w-full items-center shadow-2xl bg-base-100 bg-opacity-80">
      <Card.Body className='flex  flex-col lg:flex-row'>
      <div className="card shadow-xl w-28 h-28 ">
      <figure><img src={cardimg} alt="Shoes" /></figure>
    </div>
      </Card.Body>
    </Card>
  )

}