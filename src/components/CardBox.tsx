import React from 'react';
import { Button, Card, ChatBubble, Form } from 'react-daisyui';
import cardimg from './../assets/magonegro.png';
export const CardBox: React.FC<any> = (props) => {

  return (
    <div>
      <div className="mb-3">
      <Card>
      <Card.Title tag="h2" className='p-5'>
        <p>Mago Negro</p>
        </Card.Title>
        <Card.Image
          src={cardimg}
          alt="Shoes"
        />
        <Card.Body>
          <div className=''>

    <ChatBubble end={false}>
      <ChatBubble.Message>The ultimate wizard in terms of attack and defense.</ChatBubble.Message>
    </ChatBubble>
          </div>
          
        </Card.Body>
      </Card>
    </div>
    </div>
  )

}