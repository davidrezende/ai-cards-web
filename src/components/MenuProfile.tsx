import React from 'react';
import { Button, Card, Form } from 'react-daisyui';
import cardimg from './../assets/magonegro.png';

export const MenuProfile: React.FC<any> = (props) => {

  return (
    <Card className="w-full sm:w-1/3 lg:w-full items-center shadow-2xl bg-base-100 bg-opacity-80">
      <Card.Body className='flex  flex-col lg:flex-row'>
      <div className="card shadow-xl  ">
      <figure><img src="https://www.scotsman.com/webimg/b25lY21zOmRmYmExYzE4LTZhY2ItNDBkZS1iMTU1LWY4YTVlZWNmYTdkYzowOTcxZDZlOC00MDc1LTQzYzItOWEyOC00YjNlNzFiY2Y1YzI=.jpg?width=1200&enable=upscale" alt="Shoes" /></figure>
    </div>
      </Card.Body>
      <Card.Title>David</Card.Title>
    </Card>
  )

}